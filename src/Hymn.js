import React from "react";


function Hymn(props){
    return(
        <div>
            <h3 style={{display: props.title ? "block" : "none", color:"red"}}> Title: {props.title}</h3>
            {/* Or <h3 style={{display: !props.question && "none"}}> Question: {props.question}</h3> */}
            <h3 style={{color: !props.title && "#888888"}}>Answer: {props.hymnal} </h3> 
            {/* colors are put inside quotes in order for them to work. */}
            
        </div>
    )
}

export default Hymn