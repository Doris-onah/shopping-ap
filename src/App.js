import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ShowReducer from './ShowReducer';
import Home from './Home';
import Men from './Men';
import ErrorPage from './ErrorPage';
import Contact from './Contact';

import './App.css';
import ErrorBoundary from './ErrorBoundary';
import { Helmet } from 'react-helmet';


function App() {
  return (
    <div className="app">
        <div  className='app-con'>
      <Helmet>
    <title>shopping app</title>
    <meta name="description" content="contains all route"/>
    <meta name='keywords' content='fashion for men and women'/>
   
  </Helmet>
        <ErrorBoundary>

       <Routes>
        <Route path='/' element={<Home />}>
          <Route path="/"element={<Men />} />
          <Route path='Men' element={<Men />} />
          <Route path='ShowReducer' element={<ShowReducer />} />
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
