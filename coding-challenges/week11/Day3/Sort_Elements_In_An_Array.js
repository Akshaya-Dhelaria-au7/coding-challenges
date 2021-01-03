var arr=[9,8,7,-6,5,-4,3,-2,1]
for(i=1;i<arr.length;i++){
	for(j=0;j<arr.length;j++){
	if (arr[j]>arr[j+1]){
		temp=arr[j]
		arr[j]=arr[j+1]
		arr[j+1]=temp
	}else{
		continue
	}
}
}console.log(arr)
