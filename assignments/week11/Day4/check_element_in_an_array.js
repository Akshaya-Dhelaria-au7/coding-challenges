function find_element(array,value){
		let result=false
		let i=0
    for (i=0;i<array.length;i++){
    if (arr[i] == value){
        result=true
				break
    }else{
        continue
    }
 }
if(result == true){
	console.log("Present in array at index")
	return (i)
}else{
	console.log("Not present so returning")
	return -1
}
}
let arr=[11,22,9,18,27,33]
let val=27
console.log(find_element(arr,val))

