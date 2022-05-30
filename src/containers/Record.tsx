import React, { useState, useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { useLocation } from 'react-router-dom';
import Records from '../components/Records';
import { rightAnswersSelector } from '../recoil';

const useQuery = () => {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
};

const Record = () => {
  const query = useQuery();
  const [showAll, setShowAll] = useState<boolean>(JSON.parse(query.get('showRecords') as string) as boolean || false);
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
