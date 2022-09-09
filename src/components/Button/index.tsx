/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';

type Props = {
  color: string
  link?: string
  children: React.ReactNode | string
  onClick?: () => void
  disabled?: boolean
}

const Button = ({
  color,
  link,
  children,
  onClick,
  disabled,
}: Props) => (
  link
    ? (
      <Link to={link}>
        <button type="button" className={`Button ${color} ${disabled ? 'disabled' : ''}`} disabled={disabled}>
          {children}
        </button>
      </Link>
    )
    : (
      <button type="button" className={`Button ${color} ${disabled ? 'disabled' : ''}`} onClick={onClick && onClick} disabled={disabled}>
        {children}
      </button>
    )
);

export default Button;
