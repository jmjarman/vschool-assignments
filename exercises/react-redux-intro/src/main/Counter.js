import React from "react";
import {connect} from "react-redux"

import{addOne, subOne, reset} from "../redux/actions/index.js"

function Counter(props){
    const style = {
        width: "50%",
        margin: "auto",
        display: "flex",
        justifyContent: "space-between",
        position: "relative",
        top: "50%",
        transform: "translateY(-50%)",
        fontSize: "120px"
    }


return(
    <div style={style}>
    <button onClick ={props.addOne}>+</button>
    <span>{props.counter}</span>
    <button onClick ={props.subOne}>-</button>
    <button onClick = {props.reset}>Reset</button>
    </div>
)
}
const mapStateToProps =(state)=>{
    return state;
}

export default connect(mapStateToProps, {addOne, subOne, reset})(Counter);
