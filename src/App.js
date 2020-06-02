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
	// fetch one random item from the questions array/variable

	let randomQuestion = () => {
		console.log("randomQ triggered");
		let q = questions[Math.floor(Math.random() * questions.length)];
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
