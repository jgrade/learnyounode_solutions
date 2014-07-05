var mymodule = require('./makeItModular_module.js')

mymodule(process.argv[2], process.argv[3], function(err, secondArray){
	if (err){
    	return console.error('There was an error:', err);
  }
  secondArray.forEach(function (file){
  	console.log(file)
  })
})

//console.log(secondArry)

