import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import { Route, Routes } from 'react-router-dom';
import Api from './Components/Api';
import AxiosApi from './Components/AxiosApi';
import UserProfileForm from './Components/FormikForm'
import UserProfileForm1 from './Components/FormikForm1'

function App() {
  return (
    <div className="App">
        {/* <h1>Route / API Demo</h1>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
        </Routes> */}
        {/* <Api/>  */}
        <hr/>
        {/* <AxiosApi/> */}

        {/* <UserProfileForm/> */}

        <UserProfileForm1/>

    </div>
  );
}

export default App;
