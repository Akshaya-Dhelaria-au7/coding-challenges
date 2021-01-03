function reverse_polish(arr){
  let stack = []
  let count = 0
  for (let i=0;i<arr.length;i++){
    if(arr[i] != "+" && arr[i] != "*" && arr[i] != "-" && arr[i] != "/"){
      stack.push(arr[i])
    }

    if(arr[i] == "+" || arr[i] == "*" ||  arr[i] == "-" || arr[i] == "/" ){
          let num1 = stack.pop()
          let num2 = stack.pop()
        if(arr[i] == "+"){
          count = parseInt(num1)+parseInt(num2)
        }
        if(arr[i] == "*"){
          count = parseInt(num1)*parseInt(num2)
        }
        if(arr[i] == "-"){
          count = parseInt(num1)-parseInt(num2)
        }
        if(arr[i] == "/"){
          count = parseInt(num2)/parseInt(num1)          
        }
        stack.push(count)
    }
  }
  return stack.pop()
}

console.log(reverse_polish(["2", "1", "+", "3", "*"]))
console.log(reverse_polish(["4", "13", "5", "/", "+"]))
console.log(reverse_polish(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]))

