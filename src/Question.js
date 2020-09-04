import React from "react";

/**
 * View component that displays the question string plucked at random in the App component
 * @param  {string} {question}
 */
const Question = ({ question }) => {
	return (
		<div>
			<p className="question">{question}</p>
		</div>
	);
};

export default Question;
