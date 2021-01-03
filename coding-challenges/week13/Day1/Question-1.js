/*Question - 1
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
For example, getIndexToIns([1, 2, 3, 4], 1.5) should return 1 because it is greater than 1 (which has index 0), but less than 2 (which has index 1).
Likewise, getIndexToIns([20, 3, 5], 19) should return 2 because once the array has been sorted it will look like [3, 5, 20] and 19 is less than 20 (index 2) and greater than 5 (index 1).*/


getIndex=(array,n)=>{
	for (i=0;i<array.length;i++){
		for(j=0;j<array.length;j++){
			if (array[j]>array[j+1]){
				temp=array[j]
				array[j]=array[j+1]
				array[j+1]=temp
			}else{
				continue
			}
		}
		}console.log(array)	
	 for(i=0;i<=array.length;i++){
			if (n>array[i]){
				continue
			}else{
				console.log("The index where it can be inserted is",i)
				break
			}
	 }
}
console.log(getIndex([45,24,66,37,25],33))

