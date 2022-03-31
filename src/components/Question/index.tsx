import React from 'react';
import './Question.scss';

type Props = {
  children: React.ReactNode
}

const Question = ({ children }: Props) => (
  <div className="col-xs-12 center">
    <h2 className="Question">{children}</h2>
  </div>
);

export default Question;
