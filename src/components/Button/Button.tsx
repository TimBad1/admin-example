import classNames from 'classnames';
import React from 'react';
import styles from './button.module.scss';

type TButton = 'small' | 'medium' | 'large';

interface IButton {
  name: string;
  size: TButton;
  onClick: () => void;
}
export function Button({onClick, name, size}:IButton) {
  return (
    <button onClick={onClick} className={classNames(
      'btn',
      styles[`btn-${size}`]
    )}>{name}</button>
  );
}
