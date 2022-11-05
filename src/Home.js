import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import NikeL from "../src/images/NikeL.jpeg"
import { Helmet } from 'react-helmet-async';

function Home() {
  return (
    <div className="home">
      <Helmet>
    <title>home</title>
    <meta name="description" content="home page of routes"/>
    <link rel="canonical" href="/"/>
  </Helmet>
      <div className="home-box">
       
        <header className="header">
          <div className="nav-link">
            <img src={NikeL} className="logo" alt="Vite logo" width="40px" height="40px"/>
            <div className="nav-items">
              
              <Link to="CountHook" className="link">
                Men
              </Link>
              <Link to="ShowReducer" className="link">
                Women
              </Link>
              <Link to="ErrorPage" className="link">
                About
              </Link>
              <Link to="Contact" className="link">
                Contact us
              </Link>
            </div>
          </div>
        </header>
      
        <div className="main">
          <div className="box-con">
          <Outlet />
          </div>
        <div className='footer'>  <footer>created by alpha enny</footer></div>
        </div>
      </div>
     </div>
  );
}
export default Home;
