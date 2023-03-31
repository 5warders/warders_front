import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { Login } from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/Login" Component={Login} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
