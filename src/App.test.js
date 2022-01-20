import { launch } from "puppeteer";
import { questions } from "./questions";
import { selectRandomItemFromArray } from "./utils";

// Integration Tests

describe("randomize function", () => {
	it("should select an item from the data (copy of questions) array at random", () => {
		let data = [...questions];
		let choice = selectRandomItemFromArray(data);
		expect(choice).toBeOneOf(questions);
	});
});

// e2e Test

describe("e2e Test", () => {
	test("should display random question inside question component when button clicked", async () => {
		const browser = await launch({
			headless: false,
			slowMo: 80,
			args: ["--window-size=1000,800"],
		});
		const page = await browser.newPage();
		await page.goto("http://localhost:3000/");

		await page.click("button");

		let question = await page.$eval(".question", (el) => el.textContent);
		expect(question).toBeOneOf(questions);
	}, 300000);
});
