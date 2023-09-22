import React from "react";

function Aktor(props){
    console.log(props)
    return (
        <li className="aktor">{props.name}: {props.bio}</li>
    );
}

export default Aktor;