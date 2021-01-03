/*Question - 3

Create a function that takes an object and returns the keys and values as separate arrays.
Examples
keysAndValues({ a: 1, b: 2, c: 3 })
➞ [["a", "b", "c"], [1, 2, 3]]

keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]*/

let keysAndValues =  {
	a: "Apple",
	b: "Google",
	c: "Facebook"
}
console.log(Object.keys(keysAndValues),",",Object.values(keysAndValues))

