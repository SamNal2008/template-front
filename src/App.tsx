import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './common/Footer';
import Header from './common/Header';
import Home from './Home';

function App() {
  return (
      <BrowserRouter>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        <Header/>
        <main>
          <Routes>
            <Route path='home' element={<Home/>} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
