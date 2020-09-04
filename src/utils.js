/**
 * Function selects an item from array at random. Will throw if array is empty or argument is not an array.
 * @param  {object} arr
 * @throws {object}
 */
const selectRandomItemFromArray = (arr) => {
	if (arr.constructor !== Array) {
		throw new Error("Input is not an array");
	} else if (arr.length === 0) {
		throw new Error("Array is empty");
		// } else if (
		// 	arr.every(function (element) {
		// 		return typeof element !== "number";
		// 	})
		// ) {
		// 	throw new Error("Array contains a non-integer");
	} else {
		const index = Math.floor(Math.random() * arr.length);
		let choice = arr.splice(index, 1)[0];
		return choice;
	}
};

exports.selectRandomItemFromArray = selectRandomItemFromArray;
