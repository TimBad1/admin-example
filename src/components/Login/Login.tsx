import axios from 'axios';
import { ChangeEvent, FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
// import { useUserList } from '../../functions/useData';
import { errorEntry, loading, RootState, TUserItem, updateEmail, updateName, updateOrderlist, updatePassword } from '../../store/reducer';
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
  const errorEntryBool = useSelector<RootState, boolean>(state => state.errorEntry);
  let user = useSelector<RootState>(state => state.login.name);
  console.log('user',user);
  

  function handleChangeEmail(event: ChangeEvent<HTMLInputElement>) {
    dispatch(updateEmail(event.target.value));
  }

  function handleChangePassword(event: ChangeEvent<HTMLInputElement>) {
    dispatch(updatePassword(event.target.value));
  }

  useEffect(() => {
    axios
      .get<TUserItem[]>('http://localhost:3000/orders')
      .then(data => {
          const orderList = data.data.filter(item => item === user);
          console.log('data',orderList)
          dispatch(updateOrderlist(orderList))
      }
  )
},[user])

  function handleSubmit (event:FormEvent) {
    event.preventDefault(); 
    axios
      .get('http://localhost:3000/logins')
      .then(data => {
        const login = data.data;
        const entry = login.find((log: ILogin) => 
          log.email === emailValue 
            && log.password === passwordValue)
        console.log('entry', entry);
        user = entry.name;
        
        if(entry) {
          dispatch(loading())
          dispatch(updateName(user))
        } else {
          dispatch(errorEntry())
        }
      })
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {errorEntryBool 
        && <p className={styles.errorDescr}>Где-то закралась ошибка, попробуйте ещё раз</p>}
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
