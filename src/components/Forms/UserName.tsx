import React, { ChangeEvent, useState } from 'react';
import Button from '../Button';
import './UserName.scss';

type Props = {
  // eslint-disable-next-line no-unused-vars
  actionCallBack: (nameProp: string) => void
}

const UserName = ({ actionCallBack }: Props) => {
  const [name, setName] = useState<string>('');
  const [disabled, setDisabled] = useState<boolean>(true);
  const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    if (value.length >= 3) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
    setName(value);
  };
  return (
    <div className="UserName">
      <span className="UserName__question mb-6">¿Cuál es tu nombre?</span>
      <input
        className="UserName__input mb-6"
        type="text"
        value={name}
        onChange={handleChange}
      />
      <Button
        color="UserName__button full"
        onClick={() => actionCallBack(name)}
        disabled={disabled}
      >
        Guardar
      </Button>
    </div>
  );
};

export default UserName;
