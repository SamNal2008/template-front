import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import InternalErrorPage from './pages/InternalError';
import NotFoundPage from './pages/NotFound';
import Home from './Home';

function App() {
  return (
      <BrowserRouter>
        <Header/>
        <main style={{height: '80vh'}}>
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
