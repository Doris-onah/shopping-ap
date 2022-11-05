import React from 'react';
import { useReducer} from 'react';
import StateReducer from './StateReducer';
import BlackH from "../src/images/BlackH.jpeg"
import Toggle from './Toggle';

function ShowReducer() {
  const initialState = 0;
  const [count, dispatch] = useReducer(StateReducer, initialState);
  

  return (
    <div className="box-con">
<div className="box-items">
      <div className="box">
    <img src={BlackH} width="400PXpx"  height="400px"alt="heel" />
    <br/>
    <div className='rating'>
<Toggle/> <Toggle/> <Toggle/> <Toggle/> <Toggle/>
</div>
     </div>

      <div>
      <div>
      <h1>BLACK HEEL</h1>
      <h2>PRICE: 76,000</h2>
      <ul>
      <li>Heel height: 10cm</li>
      <li>Thickness of waterproof platform: 1cm</li>
      <li> colour: White, yellow, red, green, black, champagne, gold, silver </li>
      </ul>
      </div>
  
      <div className="card">
        <button type="button" className="counter" onClick={() => dispatch({ type: 'increment' })}> + </button>
        <button type="button" className="counter">{count}</button>
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
