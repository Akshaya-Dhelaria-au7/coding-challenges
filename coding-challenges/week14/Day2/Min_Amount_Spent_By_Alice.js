let shoppingPrice = [[9,2,1], [3,2,2], [9,7,11]]
let count=0
let temp=0
let index=0

for (let prices in shoppingPrice) {
  index = Object.keys(shoppingPrice[prices]).map(i => parseInt(i))
	if (prices == 0) {
    let variable = shoppingPrice[prices].sort((a, b) => a - b)
    temp = shoppingPrice[prices].indexOf(variable[0])
    count = variable[0]
  }else if (prices > 0) {
    index = index.slice(0, temp).concat(index.slice(temp + 1))
    variable = shoppingPrice[prices].slice(0, temp).concat(shoppingPrice[prices].slice(temp + 1))
    var_1 = variable.slice(0)
    var_1 = var_1.sort((a, b) => a - b)
    for (let i of index) {
      if (shoppingPrice[prices][i] == var_1[0]) {
        temp = i
        break
      }
    }
		count = count + var_1[0]	
  }
}
console.log("Minimum amount spent is:",count)

