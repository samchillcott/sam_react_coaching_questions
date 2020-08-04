const { selectRandomItemFromArray } = require("./utils");
const puppeteer = require("puppeteer");

// Unit Test

test("should select an item from an array at random", () => {
	;
	expect(selectRandomItemFromArray([1, 2])).toBeOneOf([1, 2]);
	// const selection = selectRandomItemFromArray([1, 2, 3, 4]);
	// expect(selection).toBe(1 || 2 || 3 || 4);
});

// Integration Test

// e2e Test
