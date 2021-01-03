/*Question - 5

Write a function that validates whether two strings are identical. Make it case insensitive.
Examples
match("hello", "hELLo") ➞ true

match("motive", "emotive") ➞ false

match("venom", "VENOM") ➞ true

match("mask", "mAskinG") ➞ false*/

string = (str1,str2)=>{
	if (str1.length !== str2.length){
		return false
	}else{
	let result1 = str1.toLowerCase()
	let result2 = str2.toLowerCase()
	if (result1 === result2){
		return true
	}else{
		return false
	}
	}
}
console.log(string("motive","emotive"))     
console.log(string("HeLlo","helLO"))

