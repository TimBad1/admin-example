import React from 'react';
import { useSelector } from 'react-redux';
import { RootState, TUserItem } from '../../store/reducer';
import { Button } from '../Button';
import styles from './main.module.scss';

export function Main() {
  const orderlist = useSelector<RootState, TUserItem[]>(state => state.orderlist);
  console.log('orderlist', orderlist)
  
  return (
    <main className={styles.main}>
      <div className={styles.menu}>
        <h2 className={styles.title}>Заказы</h2>
        <Button name={'По номеру заказа'} size={'medium'}/>
      </div>
      <table className={styles.table}>
        <thead className={styles.row}>
          <th scope='col'>Номер заказа</th>
          <th scope='col'>Email</th>
          <th scope='col'>Сумма</th>
          <th scope='col'>Дата</th>
        </thead>
        {orderlist.map(order => 
          <tr key={order.id} className={styles.row}>
            <td>{order.number}</td>
            <td>{order.email_client}</td>
            <td>{order.check}</td>
            {/* <td>{order.date_order}</td> */}
            <td>01.01.2001</td>
          </tr>
        )}
      </table>
      <div className={styles.buttonWrapper}>
        <Button name={'Показать ещё...'} size={'large'}/>  
      </div>
    </main>
  );
}
