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
	const [question, setQuestion] = useState("");

	// let randomQuestion = () => {
	// 	let q = questions[Math.floor(Math.random() * questions.length)];
	// 	setQuestion(q);
	// };

	// let randomQuestion = () => {
	// 	let q = questions.splice(Math.floor(Math.random() * questions.length), 1);
	// 	setQuestion(q);
	// };
	debugger;
	let data = [...questions];
	let chosenItems = [];

	console.log(data);
	console.log(chosenItems);

	let randomQuestion = () => {
		console.log("RQ called");

		if (data.length === 0) {
			data = chosenItems;
			chosenItems = [];
		} else {
			let spliceIndex = Math.floor(Math.random() * data.length);
			let choice = data.splice(spliceIndex, 1);
			chosenItems.push(choice);
		}

		console.log(data);
		console.log(chosenItems);

		// grab a question from the data array at a random index
		let selectedQuestion = data[Math.floor(Math.random() * data.length)];
		setQuestion(selectedQuestion);
	};

	return (
		<div className="App">
			<button onClick={randomQuestion}>Generate</button>
			<Question question={question} />
		</div>
	);
};

export default App;
