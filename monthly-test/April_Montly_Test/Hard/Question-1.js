minPalindromeSteps=(str)=>{
	let forward,backward
	backward = str.length-1
	forward = 0

let str1 =str.split("").reverse().join("")
if (str === str1){
	console.log("Already a palindrome")
}

while(str.charAt(forward) != str.charAt(backward)){
	forward++
}
let first_match = forward
if (forward == backward){
	console.log(str.length-1)
}else{
	while((str.charAt(forward) == str.charAt(backward)) && (forward<backward)){
		forward++
		backward--
}
	if(forward>=backward){
		console.log(first_match)
	}else{
		console.log(str.length-1)
	}
}
}
minPalindromeSteps("abcdcb")

