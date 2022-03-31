/* eslint-disable no-unused-vars */
import React from 'react';
import Button from '../Button';

type Props = {
  options: Array<string>
  onAnswer: (index: number) => void
}

const Answers = ({ options, onAnswer }: Props) => {
  const handleClick = (answer: number) => {
    onAnswer(answer);
  };
  return (
    <>
      <div className="col-xs-6">
        {options.map((option, index) => (
          <div
            key={`answer-${index}`}
            className="col-xs-12"
          >
            <Button
              color={`btn-pink full btn-${(index % 2 === 1) ? 'pink' : 'green'}`}
              onClick={() => handleClick(index)}
            >
              {option}
            </Button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Answers;
