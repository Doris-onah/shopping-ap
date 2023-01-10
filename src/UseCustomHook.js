
import {useState } from "react";

function UseCustomHook(initializer){
  const [counter , setCounter] = useState(initializer);
  
  
    const Increment = () => {
setCounter(counter => counter + 1)
    }

    const Decrement = () => {
setCounter(counter => counter - 1)
    }

    const Reset = () => {
setCounter(counter => initializer)
    }

    const Value = () => {
setCounter(counter => 1)
    };
   
    
  return {counter,Increment,Decrement,Reset,Value}
}

export default UseCustomHook;