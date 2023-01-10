import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import "./Layout.css"
export default function Layout() {
    return (
        <div className="layout">
<Header/>
<Outlet/> 
<Footer/>  

        </div>
)
    }