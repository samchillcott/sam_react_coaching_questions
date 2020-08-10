import React, { useState } from "react";
import Question from "./Question";
import "./App.css";
// import questions from "./questions.js";
const { questions } = require("./questions.js");
const { selectRandomItemFromArray } = require("./utils");

const App = () => {
	let [question, setQuestion] = useState("Click Button to Start");
	let [data, setData] = useState([...questions]);
	let [chosenItems, setChosenItems] = useState([]);

	// const randomize = () => {
	// 	// No repeat array check
	// 	if (data.length === 0) {
	// 		data = chosenItems;
	// 		chosenItems = [];
	// 	}

	// 	let chosenQuestion = selectRandomItemFromArray(data);

	// 	setData(data);
	// 	chosenItems.push(chosenQuestion);
	// 	setChosenItems(chosenItems);
	// 	setQuestion(chosenQuestion);
	// };

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
	// console.log(questionString);

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
							className="fa fa-clipboard"
							onClick={() => navigator.clipboard.writeText(questionString)}
						>
							Clipboard
						</a>
						<a
							// className="twitter-share-button"
							className="fa fa-twitter"
							// eslint-disable-next-line
							target="_blank"
							href={`https://twitter.com/intent/tweet?text="${questionString}" - Generated from Sam's Coaching Question App: https://coachingquestions.netlify.app/`}
						>
							Tweet
						</a>
						{/* {console.log(questionString)} */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
