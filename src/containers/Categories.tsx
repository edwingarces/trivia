/* eslint-disable no-unused-vars */
import React from 'react';
import { useRecoilState } from 'recoil';
import { useHistory } from 'react-router-dom';
import Button from '../components/Button';
import { categoryAtom } from '../recoil';

const Categories = () => {
  const [categoryState, setCategory] = useRecoilState(categoryAtom);
  const history = useHistory();
  const handleClick = (category: string) => {
    setCategory(category);
    history.push('/questions');
  };

  return (
    <div className="row center-xs">
      <div className="col-xs-6 col-md-3">
        <Button color="btn-pink full" onClick={() => handleClick('history')}>
          Historia
        </Button>
        <Button color="btn-green full mt-6" link="/questions" disabled>
          Entretenimiento
        </Button>
        <Button color="btn-pink full mt-6" disabled>
          Naturaleza y ciencias
        </Button>
      </div>
      <div className="col-xs-6 col-md-3">
        <Button color="btn-green full" onClick={() => handleClick('geography')} disabled>
          Geografía
        </Button>
        <Button color="btn-pink full mt-6" disabled>
          Arte y literatura
        </Button>
        <Button color="btn-green full mt-6" disabled>
          Deportes y pasatiempos
        </Button>
      </div>
    </div>
  );
};

export default Categories;
