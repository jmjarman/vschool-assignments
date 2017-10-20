const state =  {
    counter: 0,


contactList:[
    {
        firstName: "Ben",
        lastName: "Turner",
        phone: "555-555-5555"
},
{
        firstName: "Nonnie",
        lastName: "Martin",
        phone: "666-666-6666"
},
{
        firstName: "Cookie",
        lastName: "Monster",
        phone: "123-456-7890"

        }
    ]

}


const reducer = function(prevState = state, action){
    switch(action.type){
        case "ADD_ONE":
        return{
            counter: prevState.counter + 1,
            contactList: prevState.contactList
        }
        case "SUB_ONE":
        return{
            counter: prevState.counter - 1,
            contactList: prevState.contactList
        }
        case "RESET":
        return{
            counter: 0,
            contactList: prevState.contactList
        }

        case "REMOVE_ONE":
        const newList = [...prevState.contactList];
        newList.shift();
        return{
            contactList: newList,
            counter: prevState.counter
        }

        default:
        return prevState
    }
}
export default reducer;
