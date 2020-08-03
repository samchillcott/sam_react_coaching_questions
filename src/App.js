import React, { useState } from "react";
import Question from "./Question";
import "./App.css";
import questions from "./questions.js";

const App = () => {
	let [question, setQuestion] = useState("Click Button to Start");
	let [data, setData] = useState([...questions]);
	let [chosenItems, setChosenItems] = useState([]);

	const randomize = () => {
		// No repeat array check
		if (data.length === 0) {
			data = chosenItems;
			chosenItems = [];
		}

		const selectRandomItemFromArray = (arr) => {
			const index = Math.floor(Math.random() * arr.length);
			let choice = arr.splice(index, 1)[0];
			return choice;
		};
		let chosenQuestion = selectRandomItemFromArray(data);

		setData(data);
		chosenItems.push(chosenQuestion);
		setChosenItems(chosenItems);
		setQuestion(chosenQuestion);
	};

	let questionString = question.toString();

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
						{console.log(questionString)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
