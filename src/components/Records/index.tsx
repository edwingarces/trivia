import React, { useEffect, useState } from 'react';
import Button from '../Button';
import './Records.scss';
import { useGetGlobalVar } from '../../hooks/useGlobal';

type RecordsType = {
  showAll: boolean
  rightAnswers: number
  btnCallBack: () => void
}

type GlobalRecord = {
  userName: string
  rightAnswers: number
}

const Records = ({ showAll, rightAnswers, btnCallBack } : RecordsType) => {
  const [allRecords, setAllRecords] = useState<GlobalRecord[]>(useGetGlobalVar('globalRecord'));

  useEffect(() => {
    if (allRecords.length) {
      const copyOfAllRecords = [...allRecords];
      copyOfAllRecords.sort((firstRecord, secondRecord) => {
        if (firstRecord.rightAnswers > secondRecord.rightAnswers) {
          return -1;
        }
        if (firstRecord.rightAnswers < secondRecord.rightAnswers) {
          return 1;
        }
        return 0;
      });
      setAllRecords(copyOfAllRecords);
    }
  }, []);

  return (
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
          <div className="col center-xs">
            <table className="Record__table">
              <thead>
                <tr>
                  <th className="Record__table-text">Nombre</th>
                  <th className="Record__table-text">Puntaje</th>
                </tr>
              </thead>
              <tbody>
                {allRecords.map(({ userName, rightAnswers: globalRecordRightAnswer }, index) => (
                  <tr key={`global-record-${index}`}>
                    <td className="Record__table-text">{userName}</td>
                    <td className="Record__table-text">{globalRecordRightAnswer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
    </>
  );
};

export default Records;
