import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { MyApp, AboutPage, Profile, ShoppingList, Greeting, Clock, Counter } from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <MyApp />
      <AboutPage />
      <Profile />
      <ShoppingList />
      <Greeting />
      <Clock />
      <Counter />      
    </div>
  </React.StrictMode>
);

reportWebVitals();
