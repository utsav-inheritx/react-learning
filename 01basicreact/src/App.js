// App.js
import React, { useState } from 'react';
import './App.css';


function MyButton() {
  var [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Btn Clicked: {count} times
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <MyButton />
    </div>
  );
}


export function AboutPage() {
  return (
    <div>
      <h1>Team India</h1>
      <p>Hello there.<br />What's your feeling on winning the T20 World Cup?</p>
    </div>
  );
}


const user = {
  name: 'Inheritx Solutions',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 100,
};

export function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
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


