const redux = require("redux");

console.log(redux)

const state = {
    counter: 0,
    contactList:[]
}

function addName(name){
    return{
        type: "ADD_NAME"
    }
}

function addOne(){
    return{
        type: "ADD_ONE"
    }
}
    function subOne(){
        return{
            type: "SUB_ONE"
 }
}

function removeName(){
    return{
        type: REMOVE_NAME
    }

}
function custom(num){
    return{
        type:"CUSTOM",
        value: num
    }
}
function reset(){
    return{
        type: "RESET"
    }
}


function reducer(prevState = state, action){
    switch(action.type){
        case "CUSTOM":
            return{
                contactList: prevState.contactList,
                counter: prevState.counter + action.value
            }
        case "RESET":
            return{
                contactList: prevState.contactList,
                counter: 0
            }
        case "ADD_NAME":
            return{
                contactList: [...prevState. contactList],
                counter: prevState.counter
            }
        case "REMOVE":
        let newList = [...prevState.contactList]
        newList.shift();
        return{
            counter: prevState.counter
            contactList: newList
        }

        default:
            return prevState;
        }
    }

const store = redux.createStore(reducer);

store.subscribe(()=>{
    console.log(store.getState());
})
store.dispatch(addName("Ben"))
store.dispatch(addName("Dave"))
store.dispatch(addName("Tom"))
store.dispatch(addName("Sally"))
