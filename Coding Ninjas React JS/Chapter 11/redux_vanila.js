
const redux = require('redux');

// actions

const add_todo = (text)=>{
    return {
        type:"ADD", text:text , isCompleted : false
    }
}


const intialestate = [];
function reducer(state = intialestate,action){

    switch(action.type){
        case "ADD":
                return [
                    ...state,
                    {
                    text : action.text,isCompleted : action.isCompleted
                }]
    }
}

const store = redux.createStore(reducer);

store.dispatch(add_todo('working on reactjs'));
store.dispatch(add_todo('working on nodejs'));


console.log(store.getState());

