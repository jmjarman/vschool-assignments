import React from "react";
import vacation from "./vacation.json"

function Body(){
    return vacation.map(function(current){
        return(

        <div>
            <h1>{current.place}</h1>
            <h2>{current.price}</h2>
            <h2>{current.timeToGo}</h2>
        </div>)
    })


}
export default Body
