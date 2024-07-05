import logo from './logo.svg';
import './App.css';

import ExpenseItem from './components/ExpenseItem';
import ExpenseItem1 from './components/ExpenseItem1';
import Shoot, { FootBall } from './components/Shoot';
import Goal from './components/IfTernaryCondition';
import Garage from './components/LogicalOperator';
import Market from './components/List';
import MyButton, {FavrioteColor, Vehicle} from './components/UseState';
import Counter, {ConditionalEffectComponent} from './components/UseEffect';

const App = () => {

  var expenseDate = new Date(2024, 7, 31);
  var expenseTitle = "Transportation Fees";
  var amount = 1500;

  let expenses = [
    {
      id: 'e1',
      title: 'School Fee',
      price: '2500',
      date: new Date(2022, 5, 12)
    },
    {
      id: 'e2',
      title: 'Tution Fee',
      price: "300",
      date: new Date(2022, 1, 12)
    },
    {
      id: 'e3',
      title: 'House Rent',
      price: "150",
      date: new Date(2021, 7, 12)
    }
  ];

  const cars = ['Ford', 'BMW', 'Audi'];

  return (
    <div>
      <h2>Expense</h2>
      <ExpenseItem />

      <ExpenseItem1
        date={expenseDate}
        title={expenseTitle}
        amount={amount} >
      </ExpenseItem1>

      {expenses.map(expense => (
        <ExpenseItem1
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.price}
        />
      ))}

      {/* <ExpenseItem1
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
      </ExpenseItem1> */}

      <Shoot />
      <br /><br />
      <FootBall />
      <Goal isGoal={true} />
      <Goal isGoal={false} />
      <Garage cars={cars} />
      <Market />
      <MyButton/>
      <FavrioteColor/>
      <Vehicle/>
      <Counter/>'
      <ConditionalEffectComponent/>
    </div>
  );
}

export default App;
