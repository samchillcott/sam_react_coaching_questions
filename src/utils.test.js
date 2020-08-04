const { selectRandomItemFromArray } = require("./utils");
const puppeteer = require("puppeteer");
// import '@testing-library/jest-dom';
const { toBeOneOf } = require('./setupTests')


// Unit Test

test("should select an item from an array at random", () => {
	;
	// expect(selectRandomItemFromArray([1, 2])).toBeOneOf([1, 2]);
	expect(selectRandomItemFromArray([43, 44, 45])).toBeOneOf([43, 44, 45]);
	// const selection = selectRandomItemFromArray([1, 2, 3, 4]);
	// expect(selection).toMatch(/^1|2|3|4$/);
	// expect(selection).toBeOneOf([1, 2, 3, 4]);
});

// Integration Test

// e2e Test
