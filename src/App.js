import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ShowReducer from './ShowReducer';
import Home from './Home';
import Men from './Men';
import ErrorPage from './ErrorPage';
import Contact from './Contact';
import Layout from './Layout';

import './App.css';
import ErrorBoundary from './ErrorBoundary';
import { Helmet } from 'react-helmet';
import Heels from './Heels';


function App() {
  return (
    <div className="App">
        <div  className='app-container'>
      <Helmet>
    <title>shopping app</title>
    <meta name="description" content="contains all route"/>
    <meta name='keywords' content='fashion for men and women'/>
   
  </Helmet>
        <ErrorBoundary>

       <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Men />} />
          <Route path='men' element={<Men />} />
          <Route path='heels' element={<Heels />} />
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
