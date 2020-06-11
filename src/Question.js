import React from "react";

const Question = ({ question }) => {
	const questionString = question.toString();

	return (
		<div>
			<p className="question">{question}</p>
			<div
				className={
					question === "Click Generate to Start"
						? "share_bar_hidden"
						: "share_bar_visible"
				}
			>
				<div className="icon_wrapper">
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
				</div>
			</div>
		</div>
	);
};

export default Question;
