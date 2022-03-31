import React, { useState, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import BigButton from '../components/BigButton';
import Modal from '../components/Modal';
import Card from '../components/Card';
import UserName from '../components/Forms/UserName';
import Button from '../components/Button';
import { userNameAtom } from '../recoil';
import { useGlobal } from '../hooks/useGlobal';

const Home = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [question, setQuestion] = useState<boolean>(false);
  const setUserName = useSetRecoilState(userNameAtom);
  const [userNameLS, setUserNameLS] = useGlobal('userName');
  const actionForm = (name: string) => {
    setShowModal(false);
    setUserName(name);
    setUserNameLS(name);
  };
  const handleYes = () => {
    setQuestion(false);
  };
  const handleNo = async () => {
    await setQuestion(false);
    setShowModal(true);
  };
  useEffect(() => {
    if (window) {
      if (userNameLS) {
        setUserName(userNameLS as string);
        setQuestion(true);
      } else {
        setShowModal(true);
      }
    }
  }, []);
  return (
    <div className="Home row center-xs">
      <div className="col-xs-6 center">
        <BigButton color="btn-pink" link="/categories">
          Categorías
        </BigButton>
      </div>
      <div className="col-xs-6 center">
        <BigButton color="btn-green" link="/ranking">
          Ranking
        </BigButton>
      </div>
      {showModal
        ? (
          <Modal>
            <Card style={{ width: '200px' }}>
              <UserName actionCallBack={actionForm} />
            </Card>
          </Modal>
        )
        : null}
      {question
        ? (
          <Modal>
            <Card>
              <>
                <span className="mb-6">
                  ¿Sigues siendo tú,
                  {' '}
                  {userNameLS}
                  ?
                </span>
                <div>
                  <Button color="btn-pink mr-3" onClick={handleYes}>Sí</Button>
                  <Button color="btn-green" onClick={handleNo}>No</Button>
                </div>
              </>
            </Card>
          </Modal>
        )
        : null}
    </div>
  );
};

export default Home;
