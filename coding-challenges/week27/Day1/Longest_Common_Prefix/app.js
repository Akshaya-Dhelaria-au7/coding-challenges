function longestCommonPrefix(arr){
    // console.log(arr.length)
    if(arr.length == 0){
        return ""
    }
    else if(arr.length == 1){
        return  arr[0].charAt(0)
    }
    var emptyString = ""
    for (var i=0;i<arr[0].length;i++){        
        var res = arr[0].charAt(i)
        for(var j=1;j<arr.length;j++){
            var res1 = arr[j].charAt(i)
            if(res === res1){
                continue
            }else{
                break
            }
        }
        if(res === res1){
            emptyString+=res
            continue
        }else if(emptyString.length == 0 && arr == undefined){
            return ""
        }
        else{
            return emptyString
        }
    }
    return emptyString
}
console.log(longestCommonPrefix(["flower","floght","flooy","flohg"]))
// longestCommonPrefix(["abc","def","abc"])
// console.log(longestCommonPrefix([]))
// console.log(longestCommonPrefix( ["dog","racecar","car"]))
