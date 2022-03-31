import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import Records from '../components/Records';
import { rightAnswersSelector } from '../recoil';

const Record = () => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const right = useRecoilValue(rightAnswersSelector);
  const toggleShow = () => {
    setShowAll(true);
  };
  return (
    <Records
      showAll={showAll}
      rightAnswers={right}
      btnCallBack={toggleShow}
    />
  );
};

export default Record;
