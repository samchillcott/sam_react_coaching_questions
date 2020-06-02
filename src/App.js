import React, { useState } from "react";
import Question from "./Question";
import "./App.css";

function App() {
	// state
	const [question, setQuestion] = useState("Click To Generate a Question");

	// fetch do i need a try and catch? kiss for now
	const getQuestion = async () => {
		console.log("getQuestion triggered");
		try {
			const response = await fetch("/questions.js");
			if (response.ok) {
				const data = await response.json();
				setQuestion(data);
				console.log(data);
			}
		} catch (error) {
			console.log(error);
		}
	};
	// fetch one random item from the questions array/variable

	// setState
	// setQuestion = () => {

	// }

	// onclick
	// const generate = () => {

	// }

	return (
		<div className="App">
			<button onClick={getQuestion}>Generate</button>
			<Question 
				question={question.question}
			/>
		</div>
	);
}

export default App;
