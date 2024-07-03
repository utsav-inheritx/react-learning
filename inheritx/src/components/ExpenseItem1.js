import './ExpenseItem.css';
import React from 'react';


function ExpenseItem1(props) {

    const day = props.date.toLocaleString('un-US', {day: '2-digit'});;
    const month = props.date.toLocaleString('un-US', {month: 'long'});
    const year = props.date.getFullYear();
  
    return(
      <div className='expense-item'>
        {/* <div>{ props.date.toISOString() }</div> */}
        <div>
            <div>{ day }</div>
            <div>{ month }</div>
            <div>{ year }</div>
        </div>
        <div className='expense-item-des'>
          <h2>{ props.title }</h2>
          <div className='expense-item-price'>${ props.amount }</div>
        </div>
      </div>
    );
  }
  
  export default ExpenseItem1;
  