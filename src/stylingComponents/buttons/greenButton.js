import React from "react";
import "./greenButtons.css";
const GreenButton = ({size ="size",name = "name"}) => {
    return(
        <div className="green-btn"> <p className={`green-btn-text-${size}`}>{name}</p></div>
    )
}
export default GreenButton;

