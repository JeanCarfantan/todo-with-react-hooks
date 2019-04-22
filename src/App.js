import React from 'react';
import {Store} from "./Store";
import './App.css';

export default function App() {
  const { state, dispatch } = React.useContext(Store);
  const [ todo, setTodo ] = React.useState("")

  //adding todo dispatch action
  const putData = (e) => {
    e.preventDefault()
    return dispatch({
      type: 'PUT_DATA',
      payload: todo
    })
  }
  const doneTodo = (e) => {
    console.log(e)
    return dispatch({
      type: 'DONE_TODO',
      payload: e
    })
  }

  return (
    <React.Fragment>
      {console.log(state.todos)}
      <div className="App">
        <form id="form">
          <input id="todo_input" type="text" placeholder="Todo" onChange={(e) => setTodo(e.target.value)}></input><br/>
          <button id="submit_button" type="submit" onClick={(e) => putData(e)}>Add</button>
        </form>
        <h1>Tasks for Today</h1>
        <ul className="todo_list">
          {state.todos.map((item,index)=>(
            <li className="todo_item" value={index} key={index} onClick={(e) => doneTodo(e.target.value)}><h3>{item}</h3></li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  )
}