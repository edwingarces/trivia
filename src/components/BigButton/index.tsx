import React from 'react';
import { Link } from 'react-router-dom';
import './BigButton.scss';

type Props = {
  color: string
  link?: string
  children: React.ReactNode
}

const BigButton = ({ color, link, children }: Props) => (
  link !== undefined
    ? (
      <Link to={link}>
        <button type="button" className={`BigButton ${color}`}>
          {children}
        </button>
      </Link>
    )
    : (
      <button type="button" className={`BigButton ${color}`}>
        {children}
      </button>
    )
);

export default BigButton;
