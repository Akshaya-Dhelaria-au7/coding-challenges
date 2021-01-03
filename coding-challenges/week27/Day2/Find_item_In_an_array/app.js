function returnIndex(arr,n){
    var left = 0
    var right = arr.length-1
    while(left<=right){
        var mid = Math.floor(left+right/2)
        if(arr[mid] == n){
            return mid
        }else if(n<arr[mid]){
            if(arr[left]<= n && n<=arr[mid]){
                right = mid - 1
            }else{
                left = mid + 1
            }
        }else{
            if(arr[mid]<=n && n<=arr[right]){
                left = mid + 1
            }else{
                right = mid - 1
            }
        }
    }
    return -1
}
console.log(returnIndex([22,33,44,55,66,77,88,99,100],44))