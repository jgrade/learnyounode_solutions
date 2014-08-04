var net = require('net');
var date = new Date();


var server = net.createServer(function (socket){
	var month = date.getMonth()+1;
		var day = date.getDate();
		var hours = date.getHours();
		var minutes = date.getMinutes();
		if((month / 10)<1){	
			month = '0' + month;

		}
		if((day / 10)<1){	
			day = '0' + day;

		}
		if((hours / 10)<1){	
			hours = '0' + hours;

		}
		if((minutes / 10)<1){	
			minutes = '0' + minutes;

		}
	socket.write(date.getFullYear()+'-'+month+'-'+day+' '+hours+':'+minutes+"\n");


	socket.end();
});
server.listen(process.argv[2]);