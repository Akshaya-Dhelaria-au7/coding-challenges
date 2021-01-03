/*Question - 4

Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.
Examples
volumeOfBox({ width: 2, length: 5, height: 1 }) ➞ 10

volumeOfBox({ width: 4, length: 2, height: 2 }) ➞ 16

volumeOfBox({ width: 2, length: 3, height: 5 }) ➞ 30
*/

class size{
	constructor(width,length,height){
		this.width=width
		this.length=length
		this.heigth=height
	}
}
volumeOfBox=(sizes)=>{
	return(sizes.width*sizes.length*sizes.heigth)
}
let sizes = new size(3,4,3)
console.log(sizes)
console.log(volumeOfBox(sizes))

