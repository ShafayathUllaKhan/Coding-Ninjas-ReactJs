import { useSelector, useDispatch } from "react-redux";
import { toggleTodo } from "../../redux/actions/todoActions";

import "./ToDoList.css";
import { actions, getInitialState, todoSelector } from "../../redux/reducers/todoReducer";
import { useEffect } from "react";
import axios from "axios";

function ToDoList() {

  const todos=useSelector(todoSelector);
  console.log(todos);
  const disptach = useDispatch();
  // const todos= store.getState().todos;

  useEffect(()=>{
      // fetch('http://localhost:4100/api/todos/').then((res)=>{
      //     return res.json();
      // }).then((res)=>{
      //   console.log(res);
      // });

      // axios.get('http://localhost:4100/api/todos/').then((res)=>{
      //       disptach(actions.setIntialState(res.data));
      // })
      disptach(getInitialState());
  },[])

  return (
    <div className="container">
    <ul>
      {todos.map((todo,index) => (
        <li key={todo.id}>
          <span className="content">{todo.text}</span>
          <span className={todo.completed ? 'completed':'pending'}>{todo.completed ? 'Completed': 'Pending'}</span>
          <button className="btn btn-warning"
          onClick={()=>{disptach(actions.toggle(index))}}
          >Toggle</button>
          </li>
      ))}
    </ul>
    </div>
  );
}

export default ToDoList;