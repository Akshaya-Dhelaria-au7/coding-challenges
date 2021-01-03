let hamming = (str)=>{
  let result = str.split("")
  for(let j=0;j<result.length;j++){
    var flag=false
    if(result[j] === "#"){
      flag=true
    }else{
      flag=false
    }
  }
  if(flag == true){
    return '""'
  }
  
  for(let i=0;i<result.length;i++){
    if(result[i] === "#"){
      result.splice(i-1,2)
      i=0
    }
    if(result.length == 0){
      return '""'
    }
  }
  return result.join("")
}
hamming("abc#d##c")


