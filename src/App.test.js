// Integration Tests

describe("randomize function", () => {
	it("should select an item from the data (copy of questions) array at random", () => {
		// let arr1 = questions;
		// let choice = selectRandomItemFromArray(questions);
		// expect(choice).toBeOneOf(questions);
		expect(selectRandomItemFromArray(questions)).toBeOneOf(questions);
	});
});

// e2e Test
describe("e2e Test", () => {
	test("should display random question inside question component when button clicked", async () => {
		const browser = await puppeteer.launch({
			headless: false,
			slowMo: 80,
			args: ["--window-size=1000,500"],
		});
		const page = await browser.newPage();
		await page.goto(
			"file:///Users/samchillcott/Desktop/DESK/CODE/GH Repos/sam_react_coaching_questions/public/index.html"
		);
		// await page.click("button");
		// await page.type("input#name", "Anna");
		// await page.click("input#age");
		// await page.type("input#age", "28");
		// await page.click("#btnAddUser");
		// const question = await page.$eval(".user-item", (el) => el.textContent);
		// expect(question).toBeOneOf(questions);
	}, 20000);
});
