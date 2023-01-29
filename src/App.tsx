import { Login } from './components/Login';
import styles from './App.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/reducer';
import { Layout } from './components/Layout';
import { Loading } from './components/Loading';
// import { Route, Routes } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  const loading = useSelector<RootState, boolean>(state => state.loading);
  const user_name = useSelector<RootState, string>(state => state.user_name);
  
  return (
    <div className={styles.App}>
      {user_name ? <Layout /> : <Login /> }
      {loading ? <Loading /> : ''}
    </div>
  );
}

export default App;