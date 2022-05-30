/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Button from '../Button';
import shuffleArray from '../../utils/shuffleArray';

type Props = {
  options: Array<string>
  onAnswer: (index: string) => void
}

const Answers = ({ options, onAnswer }: Props) => {
  const [optionsToRender, setOptionsToRender] = useState<string[]>([]);
  const handleClick = (answer: string) => {
    onAnswer(answer);
  };

  useEffect(() => {
    const optionsCopy = [...options];
    setOptionsToRender(shuffleArray(optionsCopy));
  }, [options]);

  return (
    <>
      <div className="col-xs-12 col-md-6">
        {optionsToRender.map((option, index) => (
          <div
            key={`answer-${index}`}
            className="col-xs-12"
          >
            <Button
              color={`btn-pink full btn-${(index % 2 === 1) ? 'pink' : 'green'}`}
              onClick={() => handleClick(option)}
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
