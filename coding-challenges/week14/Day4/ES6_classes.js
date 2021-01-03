/*Build an object oriented sort of connection between a Fruit and an Apple.
Every fruit should have the name, color properties and methods naming ripe, grow.
The Apple fruit should have properties of type, variety and also all other additional methods. Any sort of Object oriented model is fine.
*/

class fruit{
	constructor(nameOfFruit,colour){
	this.nameOfFruit = nameOfFruit
	this.colour = colour
	}

	ripe(){
		return (`The fruit ${this.nameOfFruit} is riped`)
	}

	grow(){
		return (`The fruit ${this.nameOfFruit} is grown`)
	}
}

let object = new fruit("Banana","yellow")
console.log(object.ripe())
console.log(object.grow())


class Apple extends fruit{
	constructor(nameOfFruit,colour,type,variety){
		super(nameOfFruit,colour)
		this.type = type
		this.variety = variety
	}

	method(){
		return (``)
	}
}
let object1 = new Apple("Apple","Red","Fuji","Spur")
console.log(object1)

