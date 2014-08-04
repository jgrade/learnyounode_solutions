var fs = require('fs')
var http = require ('http')
var url = require ('url')

var port = process.argv[2]
var path = process.argv[3]

var server = http.createServer(function (request, response){
	if (request.method !='GET'){
		return res.end('send me a GET\n')
	}
	var url_obj = url.parse(request.url,true)
	//console.log(url_obj)
	if (url_obj.pathname == '/api/parsetime'){
		var date = new Date(url_obj.query.iso)
		var json_date = {
			'hour': date.getHours(),
			'minute': date.getMinutes(),
			'second': date.getSeconds()
		}
		//console.log(json_date)
		response.writeHead(200, { 'Content-Type': 'aplication/json'})
		response.end(JSON.stringify(json_date));
	}
	if (url_obj.pathname == '/api/unixtime'){
		var date = new Date(url_obj.query.iso);
		var json_date = {
			'unixtime': date.getTime()
		}
		//console.log(json_date)
		response.writeHead(200, { 'Content-Type': 'aplication/json'})
		response.end(JSON.stringify(json_date));
		response.end(date);
	}
})
server.listen(port);