/*Question - 3:
Write a function to check if an array contains a particular number.
*/

findIndex=(array,element_to_find)=>{
	for (i=0;i<array.length;i++){
		if(array[i] == element_to_find){
			return true
		}else{
			continue
		}
	}return false
}
console.log(findIndex([1,2,4,6,8,2,45,4],46))      //Output: false
console.log(findIndex([5, 5, 5, 6], 5))	           //Output: true
console.log(findIndex([],5))                       //Output: false
