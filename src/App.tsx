import { Login } from './components/Login';
import styles from './App.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, TUserItem } from './store/reducer';
import { Layout } from './components/Layout';
import { Loading } from './components/Loading';
// import { Route, Routes } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  const loading = useSelector<RootState, boolean>(state => state.loading);
  const orderlist = useSelector<RootState, TUserItem[]>(state => state.orderlist);
  
  return (
    <div className={styles.App}>
      {orderlist.length > 0 ? <Layout /> : <Login /> }
      {loading ? <Loading /> : ''}
    </div>
  );
}

export default App;