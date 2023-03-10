import React from "react";
import CountHook from "./CountHook"
import { Helmet } from "react-helmet-async";
import data from "./Sneakers.json";
import { useState } from "react";

function Men() {
  
  const [shoe] = useState(data.shoes);
 
    return (
    <div className="men"> 
     <Helmet>
    <title>Men</title>
    <meta name="description" content="counter page implemented with custom hook"/>
    <link rel='canonical' href='Men' />
  </Helmet>
  <div className="bk">
    <div>
    <h1>Premium Wear Collection</h1>
    <p>The Epitome of Men's Clothing.</p>
    <button className="explore">Explore</button>
   </div>
  </div>
  <div className="men-con">
  {shoe
    .map((id) => {
return (
  <div className="shoes">
  <CountHook
  key={id}
  name={id.name}
  price={id.price}
  color={id.color}
  image={id.image}
  />
  </div>
  )})}
  
  </div>
       </div>
    )
}
export default Men;