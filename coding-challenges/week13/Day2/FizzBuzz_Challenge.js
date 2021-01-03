/*Question :
The FizzBuzz challenge goes something like this. Write a function that does the following:
console logs the numbers from 1 to n, where n is the integer the function takes as its parameter
logs fizz instead of the number for multiples of 3
logs buzz instead of the number for multiples of 5
logs fizzbuzz for numbers that are multiples of both 3 and 5*/

fizzBuzz=(n)=>{
	let output;
	for(let i=1;i<=n;i++){
		output = '';
		if(i%3 === 0){
			output+='Fizz';
		} 
		if(i%5 === 0){
			output+='Buzz';
		} 
		if(i%3 !== 0 && i%5 !== 0) {
			output+=i;
		}
		console.log(output);
	}
}
fizzBuzz(50);

