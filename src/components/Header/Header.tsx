import React from 'react';
import { Button } from '../Button';
import styles from './header.module.scss';
import { User } from './User';

export function Header() {
  return (
    <header className={styles.header}>
      <User />
      <Button name={'Выход'} size={'small'}/>
    </header>
  );
}
