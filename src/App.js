import React, { useState } from "react";
import Question from "./Question";
import "./App.css";
import questions from "./questions.js";

const App = () => {
	// state
	console.log("app code started");

	const [question, setQuestion] = useState("Click Button to Start");

	let [data, setData] = useState([...questions]);
	let [chosenItems, setChosenItems] = useState([]);

	// console.log(data);
	// console.log("^^ data at top of app = reset");

	const randomize = () => {
		// No repeat array check
		if (data.length === 0) {
			data = chosenItems;
			chosenItems = [];
		}

		const getRandomValue = () => {
			const index = Math.floor(Math.random() * data.length);
			let choice = data.splice(index, 1)[0];
			console.log(choice);

			return choice;
		};
		let chosenQuestion = getRandomValue();

		console.log(chosenQuestion);
		setData(data);
		console.log(data);
		// console.log("^^ data after splice");
		chosenItems.push(chosenQuestion);
		setChosenItems(chosenItems);
		setQuestion(chosenQuestion);
	};

	// return {
	// 	randomItem: getRandomValue,
	// };

	// const randomizeData = randomize();

	// let randomQuestion = () => {
	// 	// console.log("RQ called");
	// 	let q = randomizeData.randomItem();
	// 	setQuestion(q);
	// };

	const questionString = question.toString();

	return (
		<div className="App">
			<div className="wrapper">
				<h1>Coaching Question Generator</h1>
				<button onClick={randomize}>Generate</button>
				<Question question={question} />
				<div
					className={
						question === "Click Button to Start"
							? "share_bar_hidden"
							: "share_bar_visible"
					}
				>
					<div className="icon_wrapper">
						<a
							className="fa fa-clipboard"
							onClick={() => navigator.clipboard.writeText(questionString)}
						>
							Clipboard
						</a>
						<a
							className="twitter-share-button"
							// eslint-disable-next-line
							target="_blank"
							href={`https://twitter.com/intent/tweet?text="${questionString}" - Generated from Sam's Coaching Question App: `}
						>
							Tweet
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
