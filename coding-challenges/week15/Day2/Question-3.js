/*Have the function LargestPair(num) take the num parameter being passed and determine the largest double digit number within the whole number. For example: if num is 4759472 then your program should return 94 because that is the largest double digit number. The input will always contain at least two positive digits.*/

largestPair=(n)=>{
	let string  = n.toString().split("")
	let greatest_number = 0
	let each_digit = 0
	for(let i=0;i<string.length-1;i++){
		each_digit = parseInt(string[i] + string[i+1])
		if (each_digit>greatest_number){
			greatest_number = each_digit
		}
	}return greatest_number
}
largestPair(1919192919)


