let choseWine=[{
    name: "Wine S" ,
    price: 12.3
},
{
    name: "Wine 3",
    price: 11.99
},
{
		name: "Wine D",
		price: 10.99
},
{
    name:"Wine B",
    price: 10.91
},
{
		name: "Wine A",
		price: 9
}]

let array = []
let names = {};
for(i=0;i<choseWine.length;i++){
	array.push(choseWine[i].price)
	names[choseWine[i].price] = choseWine[i].name;
}

if(array.length == 1){
 	console.log(choseWine[0].name)
}

if (array.length == 0){
	console.log("null")
}

for (i=0;i<array.length;i++){
	for(j=0;j<array.length;j++){
		if (array[j]>array[j+1]){
			temp=array[j]
			array[j] = array[j+1]
			array[j+1]=temp
		}
	}
}
let chosePrice = 0;
for(i=0;i<array.length;i++){
	if(array[i] == array[i+1]){
		continue
	}else{
		chosePrice = array[i+1]
		break
	}
}
console.log(names[chosePrice])

