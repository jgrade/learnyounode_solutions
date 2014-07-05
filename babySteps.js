var a=0
for (var i = process.argv.length - 1; i >= 2; i--) {
	a += Number(process.argv[i])
}
console.log(a)