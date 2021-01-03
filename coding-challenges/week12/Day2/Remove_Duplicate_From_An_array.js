// Remove the duplicates in an array.

var duplicate_array=(array)=>{
	var new_array=[]
	for (j=0;j<arr.length;j++){
		if(new_array.indexOf(arr[j]) === -1){
			new_array.push(arr[j])
	}
	}return new_array
}
var arr=[1,2,3,4,3,2,1]
console.log(duplicate_array(arr))
