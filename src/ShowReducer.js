import React from 'react';
import { useReducer} from 'react';
import StateReducer from './StateReducer';
import Toggle from './Toggle';
import { IoReload } from "react-icons/io5";
import { Helmet } from 'react-helmet-async';

function ShowReducer(props) {
 
  const initialState = 0;
  const [count, dispatch] = useReducer(StateReducer, initialState);
  

  return (
    <div className="box-app">
   
        <Helmet>
    <title>showreducer</title>
    <meta name="description" content="counter showing useReducer"/>
    <link rel="canonical" href='meeeee'/>
  </Helmet>
<div className="box-items">
       <div className="box-img-heel" >
    <img src={props.image}  width="409px" height="350px" alt="heels" />
      </div>

     <div className="content">
     <div>
     <div className='rating'>
<Toggle /> <Toggle/> <Toggle/> <Toggle/> <Toggle/>
</div>
      <p>{props.name}</p>
      <h1>PRICE:{props.price}</h1>
      <p>color: {props.color}</p>
      </div>
  
      <div className="card">
       <div> <button type="button" className="counter" onClick={() => dispatch({ type: 'increment' })}> + </button></div>
       <div> <button type="button" className="counter">{count}</button></div>
        <button type="button" className="counter" onClick={() => dispatch({ type: 'decrement' })}>-</button>
        <button type="button" className="Rbtn" onClick={() => dispatch({ type: 'reset' })}><IoReload/></button>
        <button type="button"  className="Rbtn"onClick={() => dispatch({ type: 'setvalue' })}>1</button>
        </div>
        
        <div className='add-btn'>
        <button type="button" className="cart" onClick={() => alert("successfully added to cart")}>ADD TO CART</button>
        </div>
        </div>
      </div>
 
   </div>
  );
}
export default ShowReducer;
