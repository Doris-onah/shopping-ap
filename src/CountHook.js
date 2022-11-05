import React from "react"
import UseCustomHook from './UseCustomHook';
import Nike from "../src/images/Nike.jpg"
import Toggle from "./Toggle";
import { Helmet } from "react-helmet-async";
function CountHook() {
  const {counter,Increment,Decrement ,Reset,Value} = UseCustomHook(0);

  return (
    
    <div className="box-con">
      <Helmet>
    <title>customhook</title>
    <meta name="description" content="counter page implemented with custom hook"/>
    <link rel='canonical' href='CountHook' />
  </Helmet>
    <div className="box-items">

    <div className="box">
    <img src={Nike}  width="400px" height="477px" alt="dd" />
    <div className='rating'>
<Toggle /> <Toggle/> <Toggle/> <Toggle/> <Toggle/>
</div>
      </div>

     <div>
     <div>
      <h1>NIKE AIR</h1>
      <h2>PRICE: 1.6M</h2>
      <ul>
      <li>DURABLE LEATHER</li>
      <li>A lightweight with full-length encapsulated Air-Sole providing comfort.</li>
      <li> colour: White, yellow, red, green, black, champagne, gold, silver </li>
      </ul>
      </div>
     <span> <button className="counter" onClick={Increment}>+</button>
      <button type="button" className="counter">{counter}</button>
      <button type="button" className="counter" onClick={Decrement}>-</button>
      <button type="button" className="Rbtn" onClick={Reset}>Reset</button>
      <button type="button" className="Rbtn"onClick={Value} >setValue</button></span>
      <br/>
      <br/>
      <div>
      <button type="button" className="cart">ADD TO CART</button>
      </div>
      </div>
      </div>
      </div>
    
    
  )
}export default CountHook