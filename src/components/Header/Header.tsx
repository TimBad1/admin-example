import { useDispatch } from 'react-redux';
import { logOut } from '../../store/actions';
import { Button } from '../Button';
import styles from './header.module.scss';
import { User } from './User';

export function Header() {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(logOut())
  }
  return (
    <header className={styles.header}>
      <User />
      <Button onClick={handleClick} name={'Выход'} size={'small'}/>
    </header>
  );
}
