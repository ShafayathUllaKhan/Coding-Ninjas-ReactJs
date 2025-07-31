import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import { addApi, deleteApi, getApi, updateApi } from "./redux/todoSlic";
import { store } from "./store";
function App() {
  const [content,setContent] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state)=>{
    return state.toReducerStore.todos;
  })

  useEffect(()=>{
      dispatch(getApi());
  },[])


function handleChange(e){
      setContent(e.target.value);
}

function handleClick(e){
      dispatch(addApi(content));
      setContent("")
}

  return (
    <div style={{ padding: "20px" }}>
      <h2>Todo App (Redux + Node)</h2>
      <input
        placeholder="New todo"
        onChange={handleChange}
      />
      <button onClick={handleClick}>
        Add
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            <span
              onClick={() =>
                dispatch(updateApi({ id: todo._id, updates: { completed: !todo.completed } }))
              }
              style={{ textDecoration: todo.completed ? "line-through" : "none", cursor: "pointer" }}
            >
              {todo.text}
            </span>
            <button 
            onClick={()=>dispatch(deleteApi(todo._id))}
            >❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
