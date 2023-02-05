import axios from 'axios';
import { ChangeEvent, FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
// import { useUserList } from '../../functions/useData';
import { RootState, TUserItem, TUsers } from '../../store/reducer';
import { errorEntry, loading, updateEmail, updateName, updateOrderlist, updatePassword } from '../../store/actions';
import { FormLink } from '../FormLink';
import styles from './login.module.scss';

interface ILogin {
  email: string;
  password: string;
  id: number;
}

export function Login() {
  const dispatch = useDispatch();
  const user = useSelector<RootState, TUsers>(state => state.user);
  const errorEntryBool = useSelector<RootState, boolean>(state => state.errorEntry);
  
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
          const orderList = data.data.filter(item => item.user_id === user.id);
          dispatch(updateOrderlist(orderList))
      }
  )
},[user.name])

  function handleSubmit (event:FormEvent) {
    event.preventDefault(); 
    dispatch(loading())
    axios
      .get('http://localhost:3000/logins')
      .then(data => {
        const login = data.data;
        const entry = login.find((log: ILogin) => 
          log.email === user.email && log.password === user.password)
      
        if(entry) {
          user.id = entry.id;
          user.name = entry.name
          dispatch(updateName(user.name))
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
          value={user.email}
          placeholder={'Email'}
          onChange={handleChangeEmail}
        />
      </label>

      <label className={styles.form__label}>
        <input 
          className={styles.form__input} 
          type='password'
          value={user.password}
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
