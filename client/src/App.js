import React from 'react';
import './App.css'
import {Routes, Route} from 'react-router-dom';
import Layout from './Layout';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import { UserContextProvider } from './UserContext';
import CreatePost from './components/pages/CreatePost';
import PostPage from './components/pages/PostPage';
import EditPost from './components/pages/EditPost';


const App = () => {
  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={ <Layout /> }>
          <Route index element = { <Home /> } />
          <Route path='/login' element={ <Login /> } />
          <Route path='/register' element={ <Register /> } />
          <Route path='/create' element={ <CreatePost /> } /> 
          <Route path='/post/:id' element={ <PostPage /> } /> 
          <Route path='/edit/:id' element={ <EditPost /> } />
        </Route>      
      </Routes>
    </UserContextProvider>

  )
}

export default App

