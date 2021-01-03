/*Question - 2

Create a function that takes in a current mood and return a sentence in the following format: "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neutral".
Examples
moodToday("happy") ➞ "Today, I am feeling happy"

moodToday("sad") ➞ "Today, I am feeling sad"

moodToday() ➞ "Today, I am feeling neutral"
*/

//No arguments were passed in below function
moodToday=()=>{
	if(moodToday.length == 0 ){
		return "Today, I am feeling neutral"
	}else{
	return "Today, I am Feeling " + mood
}
}
console.log(moodToday())                //Output: Today, I am feeling neutral 


//Argument was passed here
moodToday=(mood)=>{
	if(moodToday.length == 0 ){
		return "Today, I am feeling neutral"
	}else{
	return "Today, I am Feeling " + mood
}
}
console.log(moodToday("happy"))        // Output: Today, I am feeling happy

