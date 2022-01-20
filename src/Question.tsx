import React from "react";

type QuestionProps = {
  question: string;
};

const Question = ({ question }: QuestionProps) => {
  return (
    <div>
      <p className="question">{question}</p>
    </div>
  );
};

export default Question;
