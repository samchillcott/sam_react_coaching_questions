import React from "react";

const Question = ({ question }) => {
	return (
		<div>
			<p>{question}</p>
			<button onClick={() => navigator.clipboard.writeText({ question })}>
				Copy To Clipboard
			</button>
		</div>
	);
};

export default Question;
