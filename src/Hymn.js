import React from "react";


function Hymn(props){
    return(
        <div className="contentWrapper">
            <h3 className="header"> Title: {props.title} </h3>
            
            <p className="body">Lyrics: {props.hymnal} </p> 
           
            
        </div>
    )
}

export default Hymn