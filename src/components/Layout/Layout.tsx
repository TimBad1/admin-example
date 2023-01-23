import React from 'react';
import { Header } from '../Header';
import { Main } from '../Main';
import styles from './layout.module.scss';

export function Layout() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}
