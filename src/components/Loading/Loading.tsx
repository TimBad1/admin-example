import React from 'react';
import styles from './loading.module.scss';

export function Loading() {
  return (
    <div className={styles.wrap}>
      <div className={styles.loader}></div>
    </div>

  );
}
