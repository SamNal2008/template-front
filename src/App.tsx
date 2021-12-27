import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './common/Footer';
import Header from './common/Header';
import InternalErrorPage from './error/InternalError';
import NotFoundPage from './error/NotFound';
import Home from './Home';

function App() {
  return (
      <BrowserRouter>
        <Header/>
        <main>
          <Routes>
            <Route path='home' element={<Home/>} />
            <Route path='internal_error' element={<InternalErrorPage/>} />
            <Route path='*' element={<NotFoundPage/>} /> 
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
