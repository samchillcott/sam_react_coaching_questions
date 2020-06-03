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

	// fetch do i need a try and catch? kiss for now
	// const getQuestion = async () => {
	// 	console.log("getQuestion triggered");
	// 	try {
	// 		const response = await fetch("/questions.js");
	// 		if (response.ok) {
	// 			const data = await response.json();
	// 			setQuestion(data);
	// 			console.log(data);
	// 		}
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	// let randomQuestion = () => {
	// 	let q = questions[Math.floor(Math.random() * questions.length)];
	// 	setQuestion(q);
	// };

	// let randomQuestion = () => {
	// 	let q = questions.splice(Math.floor(Math.random() * questions.length), 1);
	// 	setQuestion(q);
	// };

	// debugger

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
		}

		return {
			randomItem: getRandomValue,
		};
	}

	const randomizeData = randomize(questions);
	console.log(randomizeData);
	for (let i = 0; i < questions.length; i++) {
		// console.log(randomizeData.randomItem());
		let nextQuestion = randomizeData.randomItem;
		console.log(nextQuestion);
		setQuestion(nextQuestion);
	}

	return (
		<div className="App">
			<button onClick={randomize}>Generate</button>
			<Question question={question} />
		</div>
	);
};

export default App;
