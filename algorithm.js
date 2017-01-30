// Write a JavaScript program to compute the union of two arrays.
// console.log(union([1, 2, 3], [100, 2, 1, 10]));
// [1, 2, 3, 10, 100]



function union(arrayOne, arrayTwo){
	var combinedArray = arrayOne.concat(arrayTwo);
	return combinedArray.sort();


}

console.log(union([1, 2, 3], [6, 2, 4]));