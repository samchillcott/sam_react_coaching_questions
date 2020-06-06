// react and state
import React, { useState } from "react";
// Question component
import Question from "./Question";
// App style sheet
import "./App.css";
// questions list variable
import questions from "./questions.js";

const App = () => {
	// state
	const [question, setQuestion] = useState("Click Generate to Start");

	function randomize(arr) {
		let data = [...arr];
		let chosenItems = [];

		function getRandomValue() {
			if (data.length === 0) {
				data = chosenItems;
				chosenItems = [];
			}
			const index = Math.floor(Math.random() * data.length);
			const choice = data.splice(index, 1)[0];

			chosenItems.push(choice);
			return choice;
		}

		return {
			randomItem: getRandomValue,
		};
	}

	const randomizeData = randomize(questions);

	let randomQuestion = () => {
		console.log("RQ called");
		let q = randomizeData.randomItem();
		console.log(q);
		setQuestion(q);
		console.log(data);
	};

	return (
		<div className="App">
			<button onClick={randomQuestion}>Generate</button>
			<Question question={question} />
		</div>
	);
};

export default App;
