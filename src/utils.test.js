const { selectRandomItemFromArray } = require("./utils");
const puppeteer = require("puppeteer");
const { toBeOneOf } = require("./setupTests");

// Unit Tests

describe("selectRandomItemFromArray function", () => {
	it("should select an item from an array at random", () => {
		expect(selectRandomItemFromArray([1, 2])).toBeOneOf([1, 2]);
		expect(selectRandomItemFromArray([43, 44, 45])).toBeOneOf([43, 44, 45]);
	});
	it("should throw an error if not passed an array", () => {
		expect(() => {
			selectRandomItemFromArray(null).toThrow("Input is not an array");
		});
		expect(() => {
			selectRandomItemFromArray("I am a string not an Array").toThrow(
				"Input is not an array"
			);
		});
	});
	it("should throw an error if array is empty", () => {
		expect(() => {
			selectRandomItemFromArray([]).toThrow("Array is empty");
		});
	});
	it("should throw an error if array contains a non number", () => {
		expect(() => {
			selectRandomItemFromArray([1, 2, "cheeky"]).toThrow(
				"Array contains a non-integerrrrrrrr"
			);
		});
	});
});

// Integration Tests

// e2e Test
