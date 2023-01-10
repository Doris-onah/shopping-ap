import React from "react"
import UseCustomHook from './UseCustomHook';
import Toggle from "./Toggle";
import "./CountHook.css";
import { IoReload } from "react-icons/io5";
import { Helmet } from "react-helmet-async";

function CountHook(props) {
  const {counter,Increment,Decrement ,Reset,Value} = UseCustomHook(0);

 
  return (
    <div className="box-app">
     
       <Helmet>
    <title>count hook</title>
    <meta name="description" content="counter page implemented with custom hook"/>
    <link rel='canonical' href='CountHook' />
  </Helmet>
  
    <div className="box-items" >
    <div className="box-img" >
    <img src={props.image}  width="425px" height="428px" alt="dd" />
      </div>

     <div className="content">
     <div>
     <div className='rating'>
<Toggle /> <Toggle/> <Toggle/> <Toggle/> <Toggle/>
</div>
      <p  > {props.name}</p>
      <h1  >PRICE: ${props.price}</h1>
      <p > colour: {props.color}</p>
      </div>

     <div className="card">
       <button className="counter" onClick={Increment}>+</button>
      <button type="button" className="counter">{counter}</button>
      <button type="button" className="counter" onClick={Decrement}>-</button>
      <button type="button" className="counter" onClick={Reset}><IoReload/></button>
      <button type="button" className="counter"onClick={Value} >1</button>
      </div>
      <div className="add-btn">
      <button type="button" className="cart" onClick={() => alert((props.name) + "successfully added to cart")}>ADD TO CART</button>
      </div>
      </div>
      </div> 
      </div>
      
  )
}export default CountHook