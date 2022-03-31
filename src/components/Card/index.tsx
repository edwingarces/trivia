import React, { ReactElement } from 'react';
import './Card.scss';

type Props = {
  children: ReactElement
  style?: React.CSSProperties
}

const Card = ({ children, style }: Props) => (
  <div className="Card" style={style}>
    {children}
  </div>
);

export default Card;
