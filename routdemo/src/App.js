import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <h1>Route Demo</h1>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
        </Routes>
    </div>
  );
}

export default App;
