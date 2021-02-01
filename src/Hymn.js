import React from "react";


function Hymn(props){
    return(
        <div>
            <h3> Title: {props.title} </h3>
            
            <h3>Lyrics: {props.hymnal} </h3> 
           
            
        </div>
    )
}

export default Hymn