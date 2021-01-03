/*Question - 1

Create a function that returns only strings with unique characters.
Examples
filterUnique(["abb", "abc", "abcdb", "aea", "bbb"]) ➞ ["abc"]
// "b" occurs in "abb" more than once, "b" occurs in "abcdb" more than once, etc.

filterUnique(["88", "999", "989", "9988", "9898"]) ➞ []

filterUnique(["ABCDE", "DDEB", "BED", "CCA", "BAC"]) ➞ ["ABCDE", "BED", "BAC"]
*/


filterUnique=(str1)=>{
	count = 0
	
		for (i=0;i<str1.length;i++){
			let dict = {}
			str1[i].split()
			let result = str1[i].split("").join()
		
		for (j=0;j<str1[i].length;j++){
			key=str1[i][j]
			if(dict[key]){
				dict[key]=dict[key]+1
			}
			else{
				dict[key]=1
			}
		}
		for (let k in dict){
			if (dict[key] === 1){
				console.log("Unique character is",str1[i])
			}
		}
		}	
	}
console.log(filterUnique(["abb", "abc", "abcdb", "aea", "bbb"]))

