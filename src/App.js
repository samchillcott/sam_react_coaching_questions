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
	console.log("app code started");

	const [question, setQuestion] = useState("Click Generate to Start");

	let [data, setData] = useState([...questions]);
	let [chosenItems, setChosenItems] = useState([]);

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
			setData(data);
			console.log(data);
			console.log("^^ data afer splice");
			chosenItems.push(choice);
			setChosenItems(chosenItems);
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
		setQuestion(q);
	};

	return (
		<div className="App">
			<button onClick={randomQuestion}>Generate</button>
			<Question question={question} />
		</div>
	);
};

export default App;
