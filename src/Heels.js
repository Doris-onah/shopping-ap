import React from "react";
import { Helmet } from "react-helmet-async";
import data from "./Heels.json";
// import data from "./Sneakers.json";
import { useState } from "react";
import ShowReducer from "./ShowReducer";

function Heels() {
  const [female] = useState(data.femaleShoes);
  // const [shoe] = useState(data.shoes);
    return (
    <div className="men"> 
     <Helmet>
    <title>women collection</title>
    <meta name="description" content="counter page implemented with custom hook"/>
    <link rel='canonical' href='Heels' />
  </Helmet>

  <div className="background-img">
    <div>
    <h1>Premium Wear Collection</h1>
    <p>The Epitome of women's Heels.</p>
    <button className="explore">Explore</button>
   </div>
  </div>
  <div className="men-con">
 
  {female.map((id) => {
return (
  <div className="shoes">
  <ShowReducer
  key={id}
  image={id.image}
  name={id.name}
  price={id.price}
  color={id.color}
  
/>
  </div>
  )})}
  
  </div>
       </div>
    )
}
export default Heels;