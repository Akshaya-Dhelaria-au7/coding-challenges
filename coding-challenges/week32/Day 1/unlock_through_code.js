function unlock(str){
	let lowerCaseStr = str.toLowerCase()
	let array=[]
	for(let i=0;i<lowerCaseStr.length;i++){
		if(lowerCaseStr[i] == "a" || lowerCaseStr[i] == "b" || lowerCaseStr[i] == "c"){
				array.push("2")
		}
		if(lowerCaseStr[i] == "d" || lowerCaseStr[i] == "e" || lowerCaseStr[i] == "f"){
			array.push("3")
		}
		if(lowerCaseStr[i] == "g" || lowerCaseStr[i] == "h" || lowerCaseStr[i] == "i"){
			array.push("4")
		}
		if(lowerCaseStr[i] == "j" || lowerCaseStr[i] == "k" || lowerCaseStr[i] == "l"){
			array.push("5")
		}
		if(lowerCaseStr[i] == "m" || lowerCaseStr[i] == "n" || lowerCaseStr[i] == "o"){
			array.push("6")
		}
		if(lowerCaseStr[i] == "p" || lowerCaseStr[i] == "q" || lowerCaseStr[i] == "r" || lowerCaseStr[i] == "s"){
			array.push("7")
		}
		if(lowerCaseStr[i] == "t" || lowerCaseStr[i] == "u" || lowerCaseStr[i] == "v"){
			array.push("8")
		}
		if(lowerCaseStr[i] == "w" || lowerCaseStr[i] == "x" || lowerCaseStr[i] == "y" || lowerCaseStr[i] == "z"){
			array.push("9")
		}
	}
	return array.join('')
}

console.log(unlock("Nokia"))
console.log(unlock("Valut"))
console.log(unlock("toilet"))
