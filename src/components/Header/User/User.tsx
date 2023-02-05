import React from 'react';
import { useSelector } from 'react-redux';
import { RootState, TUsers } from '../../../store/reducer';
import styles from './user.module.scss';

interface IUser {
  img?: string;
  name: string;
  email: string;
}

export function User() {
  const user = useSelector<RootState,TUsers>(state => state.user);
  
  return (
    <div className={styles.container}>
      { user.avatar ? (
        <img className={styles.logo} src={user.avatar} alt="avatar" />
      ) : (
        <div className={styles.logo}></div>
      )}

      <div>
        <h2 className={styles.title}>{user.name}</h2>
        <p className={styles.descr}>{user.email}</p>
      </div>
    </div>    
  );
}
