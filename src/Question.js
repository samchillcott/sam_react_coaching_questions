import React from "react";
import questions from "./questions.js"

const Question = ({  }) => {
	
	const randomQuestion = questions[Math.floor(Math.random() * questions.length)];

	
	return <div>
		<p>{randomQuestion}</p>
		"Question component"
		</div>;
}

export default Question;
