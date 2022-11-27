import React from "react";

function WrapTitle(props){
   return(

    <div className="wrap__title white_tit" id={props.info}>
    <h1>
    <strong>{props.text[0]}</strong>
    <em>{props.text[1]}</em>
    </h1>
    </div>

   )
}

export default WrapTitle;
