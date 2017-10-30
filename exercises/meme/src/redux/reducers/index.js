import{memes} from "./memes";

const state = {
    memes: []
}

const reducer =function(prevState = state,action){
    return{
        memes: memes(prevState.memes, action)
    }
}

export default reducer;
