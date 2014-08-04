http = require('http')

var results = [];
var counter = 0;
function handler (response,index){
	var str = '';
	response.on('data', function (chunk){
			str += chunk;
	});
	response.on('end', function (){
			counter ++;
			results[index] = str;
			if (counter == 3)
			{
				results.forEach(function(item){
					console.log(item);
				});
			}
	});
}

http.get(process.argv[2],function(response){ handler(response,0); });
http.get(process.argv[3],function(response){ handler(response,1); });
http.get(process.argv[4],function(response){ handler(response,2); });
	



