import logo from './logo.svg';
import './App.css';

import ExpenseItem from './components/ExpesneItem';
import ExpenseItem1 from './components/ExpenseItem1';


function App() {

  var expenseDate = new Date(2024, 7, 31);
  var expenseTitle = "Transportation Fees";
  var amount = 1500;

  let expenses = [
    {
      id: 'e1',
      title: 'School Fee',
      price: '$2500',
      date: new Date(2022, 5, 12)
    },
    {
      id: 'e2',
      title: 'Tution Fee',
      price: "$300",
      date: new Date(2022, 1, 12)
    },
    {
      id: 'e3',
      title: 'House Rent',
      price: "$150",
      date: new Date(2021, 7, 12)
    }
  ];

  return (
    <div>
      <h2>Expense</h2>
      <ExpenseItem/>

      <ExpenseItem1
        date = { expenseDate }
        title = { expenseTitle }
        amount = { amount } >
      </ExpenseItem1>

      <ExpenseItem1
        date = { expenses[0].date }
        title = { expenses[0].title }
        amount = { expenses[0].price } >
      </ExpenseItem1>
      <ExpenseItem1
        date = { expenses[1].date }
        title = { expenses[1].title }
        amount = { expenses[1].price } >
      </ExpenseItem1>
      <ExpenseItem1
        date = { expenses[2].date }
        title = { expenses[2].title }
        amount = { expenses[2].price } >
      </ExpenseItem1>

    </div>
  );
}

export default App;
