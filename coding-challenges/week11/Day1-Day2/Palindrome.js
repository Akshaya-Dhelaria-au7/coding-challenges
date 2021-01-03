let a=prompt("Enter a string")
result=a.split('').reverse().join('')
if(a == result){
	console.log(a,"is a Palindrome")
}else{
	console.log(a,"is not a Palindrome")
}

