import React from "react";
import Navbar from "./Navbar";
import {Switch, Route} from "react-router-dom";
import About from "./views/About";
import Contact from "./views/Contact";
import ServicesContainer from "./views/services/Container";
import Body from "./views/Body";
import Footer from "./Footer";


function App (){
    return(
        <div className="app-wraper">
            <Navbar />
            <Switch>
                <Route exact path="/" component={Body} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/services" component={ServicesContainer} />
            </Switch>
            <Footer />

        </div>
    )
}

export default App;
