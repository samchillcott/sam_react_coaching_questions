// react and state
import React, { useState, useEffect } from "react";
// Question component
import Question from "./Question";
// App style sheet
import "./App.css";
// questions list variable
import questions from "./questions.js";

const App = () => {
	// state
	console.log("app code started");

	const [question, setQuestion] = useState("Click Generate to Start");

	let data = [...questions];
	let chosenItems = [];

	console.log(data);
	console.log("^^ data at top of app = reset");

	function randomize() {
		function getRandomValue() {
			if (data.length === 0) {
				data = chosenItems;
				chosenItems = [];
			}
			const index = Math.floor(Math.random() * data.length);
			const choice = data.splice(index, 1)[0];

			console.log(data);
			console.log("^^ data afer splice");

			chosenItems.push(choice);
			return choice;
		}

		return {
			randomItem: getRandomValue,
		};
	}

	const randomizeData = randomize();

	let randomQuestion = () => {
		console.log("RQ called");
		let q = randomizeData.randomItem();
		console.log(q);
		setQuestion(q);
		// console.log(data);
	};

	// useEffect(() => {
	// 	randomQuestion();
	// 	// eslint-disable-next-line
	// }, []);

	return (
		<div className="App">
			<button onClick={randomQuestion}>Generate</button>
			<Question question={question} />
		</div>
	);
};

export default App;
