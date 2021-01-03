function removeDuplicate(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i] == arr[i+2]){
            arr.splice(i+2,1)
            i=-2
        }else{
            continue
        }
    }
    return arr
}

// console.log(removeDuplicate([1,1,1,2,2,3]))
console.log(removeDuplicate([0,0,1,1,1,1,2,3,3]))
// console.log(removeDuplicate([0,0,0,1,1,1,4,4,4]))
