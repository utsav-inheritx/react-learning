import './ExpenseItem.css';
import React from 'react';

const ExpenseItem = () => {
  let currentDate = new Date();
  let month = currentDate.toLocaleString('default', { month: 'long' });
  let day = currentDate.getDate();
  let year = currentDate.getFullYear();
  let formattedDate = `${month} ${day}th, ${year}`;

  let title = "Car Insurance";

  return (
    <div className='expense-item'>
      <div>{formattedDate}</div>
      <div className='expense-item-des'>
        <h2>{title}</h2>
        <div className='expense-item-price'>$100</div>
      </div>
    </div>
  );

  //   return(
  //     <div className='expense-item'>
  //       <div>30th September 1999</div>
  //       <div className='expense-item-des'>
  //         <h2>Car Insurance</h2>
  //         <div className='expense-item-price'>$100</div>
  //       </div>
  //     </div>
  //   );
}

export default ExpenseItem;
