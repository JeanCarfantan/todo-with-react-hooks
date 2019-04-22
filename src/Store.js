import React from "react";

export const Store = React.createContext();

const initialState = {
    todos: []
}

function reducer(state, action){
    switch(action.type){

        case 'PUT_DATA':
            let tods = state.todos;
            tods.push(action.payload);
            return { ...state, todos: tods }
        
        case 'DONE_TODO':
            let index = action.payload;
            console.log(index);
            let tds = state.todos;
            tds.splice(index,1);
            return { ...state, todos: tds }
        
        default:
            return state;
    }
}

export function StoreProvider(props) {
    const [state, dispatch] = React.useReducer(reducer, initialState)
    const value = {state, dispatch}
    return <Store.Provider value={value}>{props.children}</Store.Provider>
}