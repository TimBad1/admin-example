import React from 'react';
import styles from './user.module.scss';

interface IUser {
  img?: string;
  name: string;
  email: string;
}

export function User() {
  const user:IUser = {
    // img: 'https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg',
    name: 'Администратор',
    email: 'admin@example.com',
  }
  return (
    <div className={styles.container}>
      { user.img ? (
        <img className={styles.logo} src={user.img} alt="avatar" />
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
