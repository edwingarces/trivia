import React from 'react';
import { useRecoilValue } from 'recoil';
import { ReactComponent as Check } from '../../../assets/img/check.svg';
import { ReactComponent as Cancel } from '../../../assets/img/cancel.svg';
import { rightAnswersSelector, wrongAnswersSelector } from '../../../recoil';
import './AnswersRecord.scss';

const AnswersRecord = () => {
  const right = useRecoilValue(rightAnswersSelector);
  const wrong = useRecoilValue(wrongAnswersSelector);
  return (
    <div className="AnswersRecord">
      <span className="AnswersRecord__right">
        <Check />
        <span className="AnswersRecord__number">{right && right}</span>
      </span>
      <span className="AnswersRecord__error">
        <Cancel />
        <span className="AnswersRecord__number">{wrong && wrong}</span>
      </span>
    </div>
  );
};

export default AnswersRecord;
