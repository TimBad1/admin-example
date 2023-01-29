import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, TUserItem, updateCountList } from '../../store/reducer';
import { Button } from '../Button';
import styles from './main.module.scss';

export function Main() {
  const dispatch = useDispatch()
  const datalist = useSelector<RootState, TUserItem[]>(state => state.orderlist);
  let countList = useSelector<RootState, number>(state => state.paginationCount);
  let orderlist: TUserItem[] = [];

  function formatDate(date: Date) {
    let newDate = new Date(date);
    let dd = newDate.getDate();  
    let mm = newDate.getMonth() + 1;  
    let yy = newDate.getFullYear();

    return `${dd < 10 ? '0' + dd : dd}.${mm < 10 ? '0' + mm : mm}.${yy}`;
  }
    
  useEffect(() => {
    for(let i = countList * 5; i < (countList + 1) * 5 && i < datalist.length; i++) {
      console.log("orderlist",orderlist);
      orderlist = [...orderlist, datalist[i]]
    }
  },[countList])

  function openMore() {    
    dispatch(updateCountList(countList++))
    console.log("countList",countList);
    console.log("orderlist",orderlist);
  }

  function sortList() {
    console.log('hi');
    
  }

  return (
    <main className={styles.main}>
      <div className={styles.menu}>
        <h2 className={styles.title}>Заказы</h2>
        <Button onClick={sortList} name={'По номеру заказа'} size={'medium'}/>
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
