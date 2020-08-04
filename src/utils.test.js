const { selectRandomItemFromArray } = require("./utils");
const puppeteer = require("puppeteer");
const { toBeOneOf } = require("./setupTests");

// Unit Test

test("should select an item from an array at random", () => {
	expect(selectRandomItemFromArray([1, 2])).toBeOneOf([1, 2]);
	expect(selectRandomItemFromArray([43, 44, 45])).toBeOneOf([43, 44, 45]);
	expect(selectRandomItemFromArray([])).toBe(undefined);
	// expect(selectRandomItemFromArray("I am a string not an array")).toThrow(TypeError);
});

// Integration Test

// e2e Test
