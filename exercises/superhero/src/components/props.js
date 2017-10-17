import React from "react";
import Body from "./Body";



function handleClick(phrase){
    alert(phrase)
}

function Props(props) {
    return props.itemized.map((current, i)=>{

            return <Body name = {current.name}
                        power = {current.power}
                        photo = {current.photo}
                        phrase = {current.phrase}
                        click = {handleClick}
                        />
                });
}

export default Props;
