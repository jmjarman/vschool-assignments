import React from "react";
import ReactDOM from "react-dom";
import{Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "./redux/reducers/";

import App from "./main/App";

const store = createStore(reducer);
store.subscribe(() =>{

}
)
ReactDOM.render(<Provider store = {store}><App/></Provider>, document.getElementById('root'));
