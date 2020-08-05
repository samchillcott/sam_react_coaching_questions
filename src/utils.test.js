const { selectRandomItemFromArray } = require("./utils");
const puppeteer = require("puppeteer");
const { toBeOneOf } = require("./setupTests");

// Unit Tests

test("should select an item from an array at random", () => {
	expect(selectRandomItemFromArray([1, 2])).toBeOneOf([1, 2]);
	expect(selectRandomItemFromArray([43, 44, 45])).toBeOneOf([43, 44, 45]);
	expect(() => {
		selectRandomItemFromArray(null).toThrow("Input is not an array");
	});
	expect(() => {
		selectRandomItemFromArray([]).toThrow("Array is empty");
	});
	expect(() => {
		selectRandomItemFromArray("I am a string not an Array").toThrow(
			"Input is not an array"
		);
	});
});

// Integration Tests

// e2e Test
