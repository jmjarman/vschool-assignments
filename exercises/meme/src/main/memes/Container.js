import React from "react";
import MemesComponent from "./Component";
import Meme from "./Meme";
import {connect} from "react-redux";

class MemesContainer extends React.Component{
    constructor(){
        super()
        this.genList = this.genList.bind(this)
    }
    genList(){
        return this.props.memes.map((meme, i)=>{
            return <Meme
            key={meme.title + 1}
            meme = {meme}/>
        })
    }
    render(){
        console.log(this.props)
        return(
            <MemesComponent genList = {this.genList}/>
        )
    }

}
const mapStateToProps = (state)=>{
    return{
        memes: state.memes
    }
}
export default connect(mapStateToProps,{}) (MemesContainer);
