import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Main from './Main/Main';
import Statistics from './Statistics/Statistics';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className={'container'}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/statistics" element={<Statistics />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
