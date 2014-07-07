http = require('http');

http.get(process.argv[2], function (response){
	var str = '';

	response.on("data", function (chunk){
		str += chunk;
	});
	response.on("end", function(){
		console.log(str.length);
		console.log(str);
	});
});