import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Register from './views/register';
import Login from './views/login';
import Finish from './views/register/steps/finish';

function App() {
  const [ token ] = useState(localStorage.getItem('token'))
  const [isAuthenticated, setIsAuthenticated] = React.useState(!!token)

  return (
    <Router>
      <Routes>
        <Route path='/register' Component={Register} />
        <Route path='/login' element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path='/register/finish' Component={Finish} />
      </Routes>
    </Router>
  )
} 

export default App;
