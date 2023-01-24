import React from 'react';
import { Button } from '../Button';
import styles from './main.module.scss';

export function Main() {
  const orders = [
    {
      "id": 1,
      "number": 1,
      "email_client": "client1@example.com",
      "check": 100,
      "date_order": "2022-05-15"
    },
    {
      "id": 2,
      "number": 2,
      "email_client": "client2@example.com",
      "check": 250,
      "date_order": "2022-05-16"
    },
    {
      "id": 3,
      "number": 3,
      "email_client": "client3@example.com",
      "check": 800,
      "date_order": "2022-05-16"
    },
    {
      "id": 4,
      "number": 4,
      "email_client": "client4@example.com",
      "check": 120,
      "date_order": "2022-05-20"
    },
    {
      "id": 5,
      "number": 5,
      "email_client": "client5@example.com",
      "check": 600,
      "date_order": "2022-05-25"
    },
    {
      "id": 6,
      "number": 6,
      "email_client": "client6@example.com",
      "check": 750,
      "date_order": "2022-05-26"
    },
    {
      "id": 7,
      "number": 7,
      "email_client": "client7@example.com",
      "check": 1200,
      "date_order": "2022-05-27"
    },
    {
      "id": 8,
      "number": 8,
      "email_client": "client8@example.com",
      "check": 1000,
      "date_order": "2022-05-28"
    },
    {
      "id": 9,
      "number": 9,
      "email_client": "client9@example.com",
      "check": 125,
      "date_order": "2022-05-28"
    },
    {
      "id": 10,
      "number": 10,
      "email_client": "client7@example.com",
      "check": 500,
      "date_order": "2022-05-28"
    },
    {
      "id": 11,
      "number": 11,
      "email_client": "client11@example.com",
      "check": 495,
      "date_order": "2022-05-29"
    }
  ]


  // "id": 1,
  // "number": 1,
  // "email_client": "client1@example.com",
  // "check": 100,
  // "date_order": "2022-05-15"
  
  return (
    <main className={styles.main}>
      <div className={styles.menu}>
        <h2 className={styles.title}>Заказы</h2>
        <Button name={'По номеру заказа'} size={'medium'}/>
      </div>
      <table width='100%'>
        <tr>
          <td>Номер заказа</td>
          <td>Email</td>
          <td>Сумма</td>
          <td>Дата</td>
        </tr>
        {orders.map(order => 
          <tr key={order.id}>
            <td align='center'>{order.number}</td>
            <td>{order.email_client}</td>
            <td>{order.check}</td>
            <td>{order.date_order}</td>
          </tr>
        )}
      </table>

    </main>
  );
}
