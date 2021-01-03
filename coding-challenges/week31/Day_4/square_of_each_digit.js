function squareOfEachDigit(num){
  let num_to_string = String(num).split('')
  let array = []
  for(let i=0;i<num_to_string.length;i++){
      array.push(num_to_string[i]*num_to_string[i])
  }
  return parseInt(array.join(''))
}

console.log(squareOfEachDigit(9119))
console.log(squareOfEachDigit(1234))
