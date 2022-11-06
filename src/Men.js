import React from "react";
import CountHook from "./CountHook"
import { Helmet } from "react-helmet-async";

function Men() {
    return (
    <div> 
     <Helmet>
    <title>Men</title>
    <meta name="description" content="counter page implemented with custom hook"/>
    <link rel='canonical' href='Men' />
  </Helmet>
   <CountHook/>
  </div>
       
    )
}
export default Men;