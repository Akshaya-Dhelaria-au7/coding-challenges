/*Question - 1 
Create a function to concatenate two integer arrays.*/

concat=(arr1,arr2)=>{
	let arr3=[]
	for (var i in arr1){
			arr3[i]=arr1[i]
}
	for (var j in arr2){
		arr3.push(arr2[j])
	
	}
	return arr3
}
console.log(concat([1,3,5],[2,4,6]))
console.log(concat([4,5,1],[3,3,3]))

