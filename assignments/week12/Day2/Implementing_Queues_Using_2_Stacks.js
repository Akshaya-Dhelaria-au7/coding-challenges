stack1=[];
stack2=[]

//Pushing the element into the stack 
function enqueue(n){
    stack1.push(n)
}
enqueue(4)
enqueue(5)
enqueue(6)
enqueue(7)
console.log("Elements present in stack are: ",stack1)


function dequeue(){
    if (stack1.length == 0 && stack2.length == 0){
        return "Stack is empty"
    }else{
    /*If stack1 have the elements, it will push to stack2
    and stack2 will pop the 1st element and print it*/ 
    while (stack1.length > 0){
        stack2.push(stack1.pop())
    }
    console.log("Dequeue the first element: ",stack2.pop())


}   
}   
dequeue();
