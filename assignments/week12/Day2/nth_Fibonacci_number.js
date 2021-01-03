//Write a function fib() that takes an integer n and return the nth Fibonacci number.


var fibonacci=(n)=>{
	if (n<=1){
		return n
	}else{
		var result = fibonacci(n-1)+fibonacci(n-2)
		return result
	}
}
console.log("nth Fibonacci number is",fibonacci(8))
