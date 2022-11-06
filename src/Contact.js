import React, { useState } from "react";
import ErrorBoundary from "./ErrorBoundary";
import { Helmet } from "react-helmet-async";


function Name() {
 const [name, setName] = useState(" ");
 const [display, setDisplay] = useState("")

 const handleInput = event => {
   setName(event.target.value);
 };

 const handleClick = () => {
  setDisplay (name);
 };

 return (
   <div>
<label for="review">REVIEW <span ></span></label><br/><br/>
     <input className="review-box" required aria-required="true"  onChange={handleInput} type="text" placeholder="tell us more"/>
    <br/> <button type="submit" value="Submit" onClick={handleClick}>submit</button>
     <p className="display-text">{display}</p>
   </div>
 );

}

function TestError({user}) {
    if(user !== "altschool")
    {
    throw new Error('ERROR');
}
    return(<div>
<h1>{user}</h1>
    </div>)
}

function Contact() {
 return(
  
        <div className="contact">
          <Helmet>
    <title>contact</title>
    <meta name="description" content="test our error"/>
    <link rel="canonical" href='Contact'/>
  </Helmet>

  <Name /> 

<ErrorBoundary>
<TestError user="frontend"/>
 </ErrorBoundary>
        </div>
    )
}export default Contact