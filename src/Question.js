import React from "react";

const Question = ({ question }) => {
	const questionString = question.toString();

	return (
		<div>
			<p>{question}</p>
			<div
				className={
					question === "Click Generate to Start"
						? "share_bar_hidden"
						: "share_bar_visible"
				}
			>
				<i
					className="fa fa-clipboard"
					aria-hidden="true"
					onClick={() => navigator.clipboard.writeText(questionString)}
				></i>
				<a
					className="twitter-share-button"
					// eslint-disable-next-line
					target="_blank"
					href={`https://twitter.com/intent/tweet?text="${questionString}" Generated from Sam's Coaching Question App`}
				>
					Tweet
				</a>
				<script
					async
					src="https://platform.twitter.com/widgets.js"
					charset="utf-8"
				></script>
			</div>
		</div>
	);
};

export default Question;
