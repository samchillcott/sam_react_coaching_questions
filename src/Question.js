import React from "react";

const Question = ({ question }) => {
	// let randomQuestion = question[Math.floor(Math.random() * question.length)];

	return (
		<div>
			<p>{question}</p>
			"Question component"
		</div>
	);
};

export default Question;
