digits=(n)=>{
	let arr = []
	let count = 0
	for(i=1;i<n;i++){
		arr.push(i)
		let result = String(i)
		count+= result.length
			
			
	}return count
}
console.log(digits(10))

