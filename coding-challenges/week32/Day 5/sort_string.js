function permutation(str1,str2){
  let splitString1 = str1.split('')
  let splitString2 = str2.split('')

  for(let j=0;j<splitString1.length;j++){
    if(splitString2.indexOf(splitString1[j]) == -1){
      splitString1.pop(splitString1[j])
      j-=1
    }
  }

  for(let i=0;i<splitString2.length;i++){
    if(splitString1.indexOf(splitString2[i]) == -1){
        splitString1.push(splitString2[i])
    }
  }
  str2 = splitString1.join('')
  return str2
}

console.log(permutation("cbafh","abcefd"))
