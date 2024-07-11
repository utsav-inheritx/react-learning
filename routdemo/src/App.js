import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import { Route, Routes } from 'react-router-dom';
import Api from './Components/Api';


function App() {
  return (
    <div className="App">
        <h1>Route / API Demo</h1>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
        </Routes>
        <Api/>
    </div>
  );
}

export default App;
