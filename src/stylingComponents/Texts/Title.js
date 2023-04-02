import React from "react";
import "./Texts.css";

const TextTitle = ({name= "name" , colour = "color" ,  fontsize = "fontSize"}) => {

    const bStyle = {
        color: colour,
        fontSize: fontsize,
    };
    return(
        <h1 className="title" style={bStyle}> {name} </h1>
    )
}
export default TextTitle;