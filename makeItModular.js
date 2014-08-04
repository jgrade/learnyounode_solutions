var mymodule = require('./makeItModular_module.js')

var callback = function (err, secondArray){
	if (err) throw err;
  	secondArray.forEach(function (file){
  		console.log(file)
  	})
}



mymodule(process.argv[2], process.argv[3], callback)

//console.log(secondArry)

