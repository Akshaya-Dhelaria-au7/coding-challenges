
function generous(i){
    var num = 0
    var initial=0
    while (initial + 2**num <= i){
        initial = initial + 2**num
        num = num + 1
        if (i - initial >= 2**(num-1)+2**(num-2)){
            num = num + 1  
       }
    }
    return num    
}               
function stingy(i){
    var first = 1
    var second = 1
    var total = 0
    var num = 0
    while (total+first<=i){
        total = total + first
        temp = second
        second = temp + first
        first = temp
        num = num + 1
    }    
    return num
}  
function solution(total_lambs){
    if (total_lambs >= 1000000){
        return 0
    }
    else{
        gen = generous(total_lambs)
        sti = stingy(total_lambs)
        return Math.max(sti,gen)- Math.min(gen,sti)
    }    
}
   
console.log(solution(10))
