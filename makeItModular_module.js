var fs = require('fs')
var path = require('path')

module.exports = function(dir, extensao, callback){
		fs.readdir(dir, function (err, list) {
			if (err)
				return callback(err)
			var newArray = []
			list.forEach(function (file) {
    			if (path.extname(file) === '.' + extensao)
    				newArray.push(file)
    		})
    		callback(null, newArray)
		})
}

