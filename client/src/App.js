import React from 'react';
import './App.css'
import {Routes, Route} from 'react-router-dom';
import Layout from './Layout';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';

const App = () => {
  return (

    <Routes>
      <Route path='/' element={ <Layout /> }>
        <Route index element = { <Home /> } />
        <Route path='/login' element={ <Login /> }/>
        <Route path='/register' element={ <Register /> }/>     
      </Route>      
    </Routes>
  )
}

export default App

