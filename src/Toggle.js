import React from "react";
import { AiTwotoneStar, AiOutlineStar} from "react-icons/ai";
import {useState} from "react"
function Toggle() {
    const [toggle, setToggle] = useState(false)

    const handleClick = () => {
        setToggle(!toggle)
    }
    return(
        <div>
<button type="button" aria-label="Back to the page" title="Close popup" className="toggle-btn" onClick={handleClick}>{toggle? <AiTwotoneStar className="rated"/> : <AiOutlineStar className="unrated"/>}</button>
        </div>
    )
}export default Toggle