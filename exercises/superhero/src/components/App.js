import React from "react";
import Data from "./super.json"
import Prop from "./props.js";

    function App(){
        return (
            <div className="wrapper">
                <Prop itemized={Data}/>
            </div>
        )};

export default App
