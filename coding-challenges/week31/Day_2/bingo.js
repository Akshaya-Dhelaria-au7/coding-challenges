function bingo(arr){
    if(arr.length>10){
      return "Array should be of length 10 "
    }
    var count = 0

    //Remove duplicates from array
    var newArr  = [...new  Set(arr)]
    
    for(var i=0;i<newArr.length;i++){
        if(newArr[i] == 2 || newArr[i] == 9 || newArr[i] == 14 || newArr[i] == 7 || newArr[i] == 15 ){
            count+=1
        }
        else{
            continue
        }
    }
    if(count == 5){
      return "WIN"
    }else{
      return "LOSE"
    }
}

console.log(bingo([21,13,2,7,5,14,7,15,9,10]))
console.log(bingo([1,2,3,4,5,6,7,8,9,10]))