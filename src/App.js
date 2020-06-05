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

	// let randomQuestion = () => {
	// 	let q = questions[Math.floor(Math.random() * questions.length)];
	// 	setQuestion(q);
	// };

	// let randomQuestion = () => {
	// 	let q = questions.splice(Math.floor(Math.random() * questions.length), 1);
	// 	setQuestion(q);
	// };
	console.log("top of app = reset");
	let data = [...questions];
	let chosenItems = [];

	console.log(data);
	console.log(chosenItems);

	let randomQuestion = () => {
		console.log("RQ called");

		if (data.length === 0) {
			data = chosenItems;
			chosenItems = [];
		}
		let spliceIndex = Math.floor(Math.random() * data.length);
		let choice = data.splice(spliceIndex, 1);
		chosenItems.push(choice);
		console.log("choice = " + choice);

		// console.log(data);
		// console.log(chosenItems);

		// grab a question from the data array at a random index
		// let selectedQuestion = data[Math.floor(Math.random() * data.length)];
		// console.log(selectedQuestion);

		console.log(question);
		setQuestion(choice);
		console.log(question);
	};

	return (
		<div className="App">
			<button onClick={randomQuestion}>Generate</button>
			<Question question={question} />
		</div>
	);
};

export default App;
