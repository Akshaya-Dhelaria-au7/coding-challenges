/*Question - 2:Create a function that takes an array and a string as arguments and return the index of the string.*/

findIndex=(array,string)=>{
	for (i=0;i<array.length;i++){
		if(array[i] == string){
			return i
		}else{
			continue
		}
	}return "Not found"
}
console.log(findIndex(["hi", "edabit", "fgh", "abc"],"fgh"))      //Output: 2
console.log(findIndex(["Red", "blue", "Blue", "Green"],"green"))	//Output:Not found

