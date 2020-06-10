import React from "react";

const Question = ({ question }) => {
	const questionString = question.toString();

	return (
		<div>
			<p>{question}</p>
			<button onClick={() => navigator.clipboard.writeText(questionString)}>
				Copy To Clipboard
			</button>
			<a
				className="twitter-share-button"
				// eslint-disable-next-line
				target="_blank"
				href={`https://twitter.com/intent/tweet?text="${questionString}" Generated from Sam's Coaching Question App`}
			>
				Tweet
			</a>
		</div>
	);
};

export default Question;
