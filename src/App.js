import React from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom';

import HomePage from './routes/homepage/homepage.component';
import Header from './components/header/Header';
import SignIn from './routes/sign-in/sign-in.component';

const Men = () => {
  return <h1>Men</h1>;
};
const Kids = () => {
  return <h1>KIDSSS</h1>;
};

function App() {
  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={<HomePage />} /> 
        <Route path='men' element={<Men />} />
        <Route path='kids' element={<Kids />} /> 
        <Route path='sign-in' element={<SignIn />} /> 
      </Route>
      
    </Routes>
  );
}

export default App;
