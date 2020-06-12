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

	const [question, setQuestion] = useState("Click Button to Start");

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
			// console.log(data);
			// console.log("^^ data after splice");
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

	const questionString = question.toString();

	return (
		<div className="App">
			<div className="wrapper">
				<h1>Coaching Question Generator</h1>
				<button onClick={randomQuestion}>Generate</button>
				<Question question={question} />
				<div
					className={
						question === "Click Button to Start"
							? "share_bar_hidden"
							: "share_bar_visible"
					}
				>
					<div className="icon_wrapper">
						<i
							className="fa fa-clipboard"
							onClick={() => navigator.clipboard.writeText(questionString)}
						></i>
						<a
							className="twitter-share-button"
							// eslint-disable-next-line
							target="_blank"
							href={`https://twitter.com/intent/tweet?text="${questionString}" Generated from Sam's Coaching Question App`}
						>Tweet
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
