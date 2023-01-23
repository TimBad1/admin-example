import axios from 'axios';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
// import { useVerification } from '../../hooks/useVerification';
import { loading, RootState, updateEmail, updatePassword } from '../../store/reducer';
import { FormLink } from '../FormLink';
import styles from './login.module.scss';

interface ILogin {
  email: string;
  password: string;
  id: number;
}

export function Login() {
  const dispatch = useDispatch();

  const emailValue = useSelector<RootState, string>(state => state.login.email);
  const passwordValue = useSelector<RootState, string>(state => state.login.password);

  function handleChangeEmail(event: ChangeEvent<HTMLInputElement>) {
    dispatch(updateEmail(event.target.value));
  }

  function handleChangePassword(event: ChangeEvent<HTMLInputElement>) {
    dispatch(updatePassword(event.target.value));
  }

  function handleSubmit (event:FormEvent) {
    event.preventDefault(); 
    axios
      .get('http://localhost:3000/logins')
      .then(data => {
        const login = data.data;
        const entry = login.find((log: ILogin) => 
          log.email === emailValue 
            && log.password === passwordValue)
        if(entry) {
          dispatch(loading())
        } 
      })
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.form__label}>
        <input 
          className={styles.form__input} 
          type='email'
          value={emailValue}
          placeholder={'Email'}
          onChange={handleChangeEmail}
        />
      </label>

      <label className={styles.form__label}>
        <input 
          className={styles.form__input} 
          type='password'
          value={passwordValue}
          placeholder={'Пароль'}
          onChange={handleChangePassword}
        />
      </label>
      <button 
        className={styles.form__button} 
        type='submit'
        
      >
        Войти
      </button>
      <FormLink value={'Забыли пароль?'}/>
    </form>    
  );
}
