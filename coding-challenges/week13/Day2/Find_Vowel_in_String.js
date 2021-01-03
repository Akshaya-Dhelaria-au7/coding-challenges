/* Write a function that takes a string as argument and returns the number of vowels contained in that string.
The vowels are “a”, “e”, “i”, “o”, “u”.
Examples:
findVowels('hello') // --> 2
findVowels('why') // --> 0
*/

string=(str)=>{
	var vowels=["a","e","i","o","u"]	
	let result = str.split("").join(",")
	let count=0
	for(let i=0;i<result.length;i++){
		for(let j=0;j<vowels.length;j++){
		if(result[i] == vowels[j]){
			count = count + 1
		}
	}
	}return count
}
console.log(string("why"))
console.log(string("hello"))
