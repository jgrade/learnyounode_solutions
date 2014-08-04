http = require('http');

function handler (response){
	var str = '';
	response.on("data", function (chunk){
		str += chunk;
	});
	response.on("end", function(){
		console.log(str.length);
		console.log(str);
	});
}

http.get(process.argv[2], handler)