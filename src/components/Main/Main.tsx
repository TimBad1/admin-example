import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCountList, updateOrderlist } from '../../store/actions';
import { RootState, TListItems, TUserItem } from '../../store/reducer';
import { SERVER } from '../../_vars';
import { Button } from '../Button';
import styles from './main.module.scss';

export function Main() {
  const dispatch = useDispatch()
  const datalist = useSelector<RootState, TListItems[]>(state => state.orderlist);
  let count = useSelector<RootState, number>(state => state.paginationCount);
  const userId = useSelector<RootState>(state => state.user.id);
  const [sorttype, setSortType] = useState<boolean>(true)

  function formatDate(date: Date) {
    let newDate = new Date(date);
    let dd = newDate.getDate();  
    let mm = newDate.getMonth() + 1;  
    let yy = newDate.getFullYear();

    return `${dd < 10 ? '0' + dd : dd}.${mm < 10 ? '0' + mm : mm}.${yy}`;
  }

  function openMore() {    
    axios
    .get<TUserItem[]>(`${SERVER}orders?user_id=${userId}`)
    .then(data => {
      if (count < data.data[0].list.length - 1) {
        count++;
        const newlist = [...datalist, ...data.data[0].list[count]];
        dispatch(updateCountList(count));
        dispatch(updateOrderlist(newlist))
      } else {
        
      }
    }
  )

  }

  function sortList() {
    setSortType(!sorttype)
    const compareCheck = (a: TListItems, b: TListItems) => a.check - b.check;
    const compareNumber = (a: TListItems, b: TListItems) => a.number - b.number;
    sorttype 
      ? datalist.sort((compareCheck))
      : datalist.sort((compareNumber))
  }
  
  return (
    <main className={styles.main}>
      <div className={styles.menu}>
        <h2 className={styles.title}>Заказы</h2>
        <Button onClick={sortList} name={sorttype ? 'По сумме заказа' : 'По номеру заказа'} size={'medium'}/>
      </div>
      <table className={styles.table}>
        <thead>
          <tr className={styles.row}>
            <th scope='col'>Номер заказа</th>
            <th scope='col'>Email</th>
            <th scope='col'>Сумма</th>
            <th scope='col'>Дата</th>
          </tr>
        </thead>
        <tbody>
          {datalist.map(order => 
            <tr key={order.id} className={styles.row}>
              <td>{order.number}</td>
              <td>{order.email_client}</td>
              <td>{order.check}</td>
              <td>{formatDate(order.date_order)}</td>
            </tr>
          )}
        </tbody>
      </table>
      
      <div className={styles.buttonWrapper}>
        <Button onClick={openMore} name={'Показать ещё...'} size={'large'}/>  
      </div>
    </main>
  );
}
