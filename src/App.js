import React, { useState } from "react";
import Question from "./Question";
import "./App.css";
const { questions } = require("./questions.js");
const { selectRandomItemFromArray } = require("./utils");

// Main function that executes randomization and adjusts state accordingly
const App = () => {
	let [question, setQuestion] = useState("Click Button to Start");
	let [data, setData] = useState([...questions]);
	let [chosenItems, setChosenItems] = useState([]);

	const randomize = (arr1, arr2, arr1Setter, arr2Setter, stateSetter) => {
		// No repeat array check
		if (arr1.length === 0) {
			arr1 = arr2;
			arr2 = [];
		}

		let chosenQuestion = selectRandomItemFromArray(arr1);

		arr2.push(chosenQuestion);
		arr1Setter(arr1);
		arr2Setter(arr2);
		stateSetter(chosenQuestion);
	};

	let questionString = question.toString();
	console.log(questionString);

	return (
		<div className="App">
			<div className="wrapper">
				<h1>Coaching Question Generator</h1>
				<button
					className="button"
					onClick={() =>
						randomize(data, chosenItems, setData, setChosenItems, setQuestion)
					}
				>
					Generate
				</button>
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
							onClick={() => navigator.clipboard.writeText(questionString)}
							className="hvr-backward"
						>
							<i className="fa fa-clipboard"></i>
							 Clipboard
						</a>
						<a
							// eslint-disable-next-line
							target="_blank"
							href={`https://twitter.com/intent/tweet?text="${questionString}" - Generated from Sam's Coaching Question App: https://coachingquestions.netlify.app/`}
							className="hvr-forward"
						>
							<i className="fa fa-twitter"></i>
							 Tweet
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
