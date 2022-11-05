import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ShowReducer from './ShowReducer';
import Home from './Home';
import CountHook from './CountHook';
import ErrorPage from './ErrorPage';
import Contact from './Contact';

import './App.css';
import ErrorBoundary from './ErrorBoundary';



function App() {
  return (
    <div className="app">
      <div  className='app-con'>
        <ErrorBoundary>
       <Routes>
        <Route path='/' element={<Home />}>
          <Route path="/"element={<CountHook />} />
          <Route path='CountHook' element={<CountHook />} />
          <Route path='Showreducer' element={<ShowReducer />} />
          <Route path="Contact" element={<Contact/>}/>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      </ErrorBoundary>
    </div>
    </div>
  );
}

export default App;
// CountHook"