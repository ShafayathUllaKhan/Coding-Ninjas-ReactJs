import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addTodo} from "../../redux/actions/todoActions";

import "./ToDoForm.css";
import { actions, addTodoAsyncThunk } from "../../redux/reducers/todoReducer";
import { noteSelector } from "../../redux/reducers/noteReducer";
import { notificationActions, notificationSelector } from "../../redux/reducers/notificationReducer";

function ToDoForm() {
  const [todoText, setTodoText] = useState("");
   const message = useSelector(notificationSelector);
  const disptach = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoText("");
    // disptach(addTodo(todoText));
    disptach(addTodoAsyncThunk(todoText));
    setTimeout(()=>{
       disptach(notificationActions.reset());
    },3000)
   
  };

  return (
    <div className="container">
            {
        message && <div class="alert alert-success" role="alert">
            {message}
</div>
      }
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control mb-3"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button className="btn btn-success float-end" type="submit">Create Todo</button>
    </form>
    </div>
  );
}

export default ToDoForm;