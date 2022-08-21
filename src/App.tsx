import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Main from './Main/Main';
import Statistics from './Statistics/Statistics';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { pink } from '@mui/material/colors';

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: pink[500],
      },
    },
    shape: {
      borderRadius: 0,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Header />
        <div className={'container'}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/statistics" element={<Statistics />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
