//To check whether number is even or not
function even(number){
	if(number%2==0){
		return "Even Number"
	}else{
		return "Not a even number"
	}
}console.log(even(6))

//To check whether number is odd or not
function odd(number){
	if(number%2!=0) {
		return "Odd Number"
	}else{
		return "Not a Odd Number"
	}
}console.log(odd(6))

//To check whether number is perfect square or not
function square(number){
	var result=false
	for (i=1;i<=number;i++){
		if(number/i == i){
			result=true
		}else{
			continue
		}
	}
	if(result == true){
		console.log("Number is perfect square")
	}else{
		console.log("Not a perfect square number")
	}
}
console.log(square(49))
console.log(square(50))
