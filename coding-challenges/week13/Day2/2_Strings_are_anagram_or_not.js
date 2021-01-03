/*Write a function that checks if two provided strings are anagrams of each other; letter casing shouldn’t matter. Also, consider only characters, not spaces or punctuation. For example:
anagram('finder', 'Friend')  --> true
anagram('hello', 'bye') --> false
*/	

string=(str1,str2)=>{
	let result = str1.toUpperCase().split("").sort().join("")
	let result1 = str2.toUpperCase().split("").sort().join("")
	if(result === result1){
		return true
	}else{
		return false
	}
	}	

console.log(string("finder","friend"))
console.log(string("hello","bye"))
