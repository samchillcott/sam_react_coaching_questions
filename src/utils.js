const selectRandomItemFromArray = (arr) => {
	if (arr.constructor !== Array) {
		throw "Input is not an array";
	} else if (arr.length === 0) {
		throw "Array is empty";
	} else {
		const index = Math.floor(Math.random() * arr.length);
		let choice = arr.splice(index, 1)[0];
		return choice;
	}
};

exports.selectRandomItemFromArray = selectRandomItemFromArray;
