function reverse_string(str){
  let array = []
  let split_string = str.split(' ')
  for(let i=0;i<split_string.length;i++){
    if(split_string[i].length>=5){
      var reversed_string = split_string[i].split("").reverse().join("")
      array.push(reversed_string)
    }else{
      array.push(split_string[i])
    }
  }
  return array.join(' ')
}

console.log(reverse_string("Hey fellow warriors"))
console.log(reverse_string("This is a test"))
console.log(reverse_string(( "This is another test" )))
