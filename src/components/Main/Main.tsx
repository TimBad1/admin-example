import { log } from 'console';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, TUserItem } from '../../store/reducer';
import { updateCountList } from '../../store/actions';
import { Button } from '../Button';
import styles from './main.module.scss';

export function Main() {
  const dispatch = useDispatch()
  const datalist = useSelector<RootState, TUserItem[]>(state => state.orderlist);
  let count = useSelector<RootState, number>(state => state.paginationCount);
  const [orderlist, setOrderlist] = useState<TUserItem[]>([]);
  const [sorttype, setSortType] = useState<boolean>(false)

  function formatDate(date: Date) {
    let newDate = new Date(date);
    let dd = newDate.getDate();  
    let mm = newDate.getMonth() + 1;  
    let yy = newDate.getFullYear();

    return `${dd < 10 ? '0' + dd : dd}.${mm < 10 ? '0' + mm : mm}.${yy}`;
  }

  useEffect(() => {
    const newArr: TUserItem[] = orderlist;
    for (let i = count * 5; i < (count + 1) * 5 && i < datalist.length; i++) {
      newArr.push(datalist[i])
    }    
    setOrderlist(newArr);
    console.log(orderlist);
  }, [count])

  useEffect(() => {
    const compareCheck = (a: TUserItem, b: TUserItem) => a.check - b.check;
    const compareNumber = (a: TUserItem, b: TUserItem) => a.number - b.number;
    sorttype 
      ? orderlist.sort((compareCheck))
      : orderlist.sort((compareNumber))
  }, [sorttype])

  function openMore() {    
    dispatch(updateCountList());
  }


  function sortList() {
    setSortType(!sorttype)
  }

  return (
    <main className={styles.main}>
      <div className={styles.menu}>
        <h2 className={styles.title}>Заказы</h2>
        <Button onClick={sortList} name={sorttype ? 'По сумме заказа' : 'По номеру заказа'} size={'medium'}/>
      </div>
      <table className={styles.table}>
        <thead className={styles.row}>
          <tr>
            <th scope='col'>Номер заказа</th>
            <th scope='col'>Email</th>
            <th scope='col'>Сумма</th>
            <th scope='col'>Дата</th>
          </tr>
          
        </thead>
        <tbody>
          {orderlist.map(order => 
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
