import classNames from 'classnames';
import React from 'react';
import styles from './button.module.scss';

type TButton = 'small' | 'medium' | 'large';

interface IButton {
  name: string;
  size: TButton;
}
export function Button({name, size}:IButton) {
  return (
    <button className={classNames(
      'btn',
      styles[`btn-${size}`]
    )}>{name}</button>
  );
}
