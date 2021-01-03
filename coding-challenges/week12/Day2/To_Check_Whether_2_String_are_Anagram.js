let anagram=(str1,str2)=>{
	let result = str1.toLowerCase().split('').sort().join('')
	let result1 = str2.toLowerCase().split('').sort().join('')
	if(result === result1){
		return "True, they are anagrams"
	}else{
		return "false, they aren't anagrams"
	}
}
console.log(anagram("Hello","ehllo"))
console.log(anagram("army","aryms"))
