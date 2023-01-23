import { Login } from './components/Login';
import style from './App.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from './store/reducer';
import { Layout } from './components/Layout';

function App() {
  const users = useSelector<RootState>(state => state.users)
  console.log(users);
  
  return (
    <div className={style.App}>
      {users ? <p>vbfdk</p> : <Login /> }
      <Layout />
    </div>
  );
}

export default App;
