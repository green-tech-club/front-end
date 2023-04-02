import React from "react";
import "./Texts.css";

const TextP = ({name= "name" , colour = 'color',  fontsize = "fontSize"}) => {

    const bStyle = {
        color: colour,
        fontSize: fontsize,
    };
    
    const wrapped = name.split('<br>')
                    .reduce((prev, cur) => [ ...prev, cur, <br /> ], [])
    
    return(
        <p className="paragraph" style={bStyle}> {wrapped} </p>
    )
}
export default TextP;