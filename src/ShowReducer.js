import React from 'react';
import { useReducer} from 'react';
import StateReducer from './StateReducer';
import BlackH from "../src/images/BlackH.jpeg"
import Toggle from './Toggle';
import { Helmet } from 'react-helmet-async';

function ShowReducer() {
  const initialState = 0;
  const [count, dispatch] = useReducer(StateReducer, initialState);
  

  return (
    <div className="box-con">
        <Helmet>
    <title>showreducer</title>
    <meta name="description" content="counter showing useReducer"/>
    <link rel="canonical" href='ShowReducer'/>
  </Helmet>
<div className="box-items">
      <div className="box">
    <img src={BlackH} width="438px"  height="407px"alt="heel" />
    <br/>
    <div className='rating'>
<Toggle/> <Toggle/> <Toggle/> <Toggle/> <Toggle/>
</div>
     </div>

      <div>
      <div>
      <h1>CREAMY BLACK PENCIL HEEL</h1>
      <h2>PRICE: 76,000</h2>
      <ul>
      <li>Heel height: 10cm</li>
      <li>Thickness of waterproof platform: 1cm</li>
      <li> colour: White, yellow, red, green, black, champagne, gold, silver </li>
      </ul>
      </div>
  
      <div className="card">
       <div> <button type="button" className="counter" onClick={() => dispatch({ type: 'increment' })}> + </button></div>
       <div> <button type="button" className="counter">{count}</button></div>
        <button type="button" className="counter" onClick={() => dispatch({ type: 'decrement' })}>-</button>
        <button type="button" className="Rbtn" onClick={() => dispatch({ type: 'reset' })}>reset</button>
        <button type="button"  className="Rbtn"onClick={() => dispatch({ type: 'setvalue' })}>setValue</button>
        </div>
        <br/>
        <div>
        <button type="button" className="cart">ADD TO CART</button>
        </div>
        </div>
      </div>
    </div>
   
  );
}
export default ShowReducer;
