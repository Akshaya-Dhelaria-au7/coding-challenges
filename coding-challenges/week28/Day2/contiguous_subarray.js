function contiguous_subarray(arr){
    if(arr.length == 1){
        return arr[0]
    }
    var result = 0
    for(var i = 0;i<arr.length;i++){
        var result1 = 0
        for(var j = i;j<arr.length;j++){
            var result1 = result1 + arr[j]
            if(result1>result){
                result = result1
            }         
        }
    }
    return result
}

console.log(contiguous_subarray([-2,-3,4,-1,2,1]))
// console.log(contiguous_subarray([-1]))