import React from "react";

const Question = ({ question }) => {
	return (
		<div>
			<p>{question}</p>
			<button onClick={() => navigator.clipboard.writeText({ question })}>
				Copy To Clipboard
			</button>
			<a
				class="twitter-share-button"
				target="_blank"
				href="https://twitter.com/intent/tweet"
			>
				Tweet
			</a>
		</div>
	);
};

export default Question;
