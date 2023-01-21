import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { RootState, updateEmail, updatePassword } from '../..';
import { FormLink } from '../FormLink';
import styles from './login.module.scss';

export function Login() {
  const dispatch = useDispatch();

  const emailValue = useSelector<RootState, string>(state => state.user.email);
  const passwordValue = useSelector<RootState, string>(state => state.user.password);

  function handleChangeEmail(event: ChangeEvent<HTMLInputElement>) {
    // console.log(emailValue, passwordValue);
    dispatch(updateEmail(event.target.value));
  }

  function handleChangePassword(event: ChangeEvent<HTMLInputElement>) {
    // console.log(emailValue, passwordValue);
    dispatch(updatePassword(event.target.value));
  }

  function handleSubmit (event:FormEvent) {
    event.preventDefault(); 
    console.log(emailValue, passwordValue)
    // dispatch(veri)
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
