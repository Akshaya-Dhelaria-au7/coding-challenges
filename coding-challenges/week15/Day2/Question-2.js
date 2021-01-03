/*There is an array with some numbers. All numbers are equal except for one. 
Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55*/ 


findUnique=(array)=>{
	for (let i=0;i<array.length;i++){
		if (array[i] == array[i+1]){
			continue
		}else{
			console.log(array[i+1])
			break
		}
	}
}
findUnique([0,0,5,0,0])
