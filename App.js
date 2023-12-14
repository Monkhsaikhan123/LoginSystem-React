import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/login_component'
import SignUp from './components/signup_component'
import UserDetails from './components/UserDetails'
function App() {
  return (
   <Router>
      <div className='App'>
        <div className='auth-wrapper'>
          <div className='auth-inner'>
            <Routes>
                <Route exact path='/' element={<Login/>}/>
                <Route path='/sign-in' element={<Login/>}/>
                <Route path='/sign-up' element={<SignUp/>}/>
                <Route path='/UserDetails' element={<UserDetails/>}/>
            </Routes>
          </div>
        </div>
      </div>
   </Router>
  );
}

export default App;
