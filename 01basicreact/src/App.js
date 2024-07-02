import React, { useState, useEffect } from 'react';
import './App.css';



function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Btn Clicked: {count} times
    </button>
  );
}

export function MyApp() {
  return (
    <div>
      <MyButton />
    </div>
  );
}



export function AboutPage() {
  return (
    <div>
      <h2>Team India</h2>
      <p>Hello there.<br />What's your feeling on winning the T20 World Cup?</p>
    </div>
  );
}



const user1 = {
  name: 'Inheritx Solutions',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 100,
};

export function Profile() {
  return (
    <>
      <h2>{user1.name}</h2>
      <img
        className="avatar"
        src={user1.imageUrl}
        alt={'Photo of ' + user1.name}
        style={{
          width: user1.imageSize,
          height: user1.imageSize
        }}
      />
    </>
  );
}



const products = [
  { title: 'Mango', isFruit: true, id: 1 },
  { title: 'Banana', isFruit: true, id: 2 },
  { title: 'Potato', isFruit: false, id: 3 },
];

export function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'orange' : 'red'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}



const user = {
  firstName: 'Rohit',
  lastName: 'Sharma'
};

export function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

export function Greeting() {
  return (
    <h2>
      Hello, {formatName(user)}!
    </h2>
  );
}



export function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => setDate(new Date()), 1000);

    return () => clearInterval(timerID);
  }, []);

  return (
    <div>
      <h1>Hello, Rohirat</h1>
      <h2>Time is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}



export function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Click me</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}
