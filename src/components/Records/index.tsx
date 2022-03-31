import React from 'react';
import Button from '../Button';
import './Records.scss';

type RecordsType = {
  showAll: boolean
  rightAnswers: number
  btnCallBack: () => void
}

const Records = ({ showAll, rightAnswers, btnCallBack } : RecordsType) => (
  <>
    {!showAll
      ? (
        <div className="row center-xs">
          <div className="col-6-xs center">
            <h1 className="Record__title">Puntuación</h1>
            <h2 className="Record__score">{rightAnswers}</h2>
            <Button color="btn-green" onClick={btnCallBack}>Ver todos</Button>
          </div>
        </div>
      )
      : (
        <div>
          algo
        </div>
      )}
  </>
);

export default Records;
