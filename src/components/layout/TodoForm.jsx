import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CREATE_TODO } from "../../data/type";
import nextId from "react-id-generator";
import { Col } from "reactstrap";

const TodoForm = () => {
   const [todo, setTodo] = useState({
      id: nextId(),
      text: "",
   });
   const dispatch = useDispatch();

   const handleSubmit = (e) => {
      // form 에서 엔터를 누르면 새로고침이 되고 -> state 값이 날라가므로, 이를 방지해준다.
      e.preventDefault();
      console.info(todo);
      dispatch({
         type: CREATE_TODO,
         payload: todo,
      });
      setTodo({ id: nextId(), text: "" });
   };

   return (
      <Col lg="12">
         <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <TextField
               required
               fullWidth
               value={todo.text}
               onChange={(e) =>
                  setTodo({
                     ...todo,
                     text: e.target.value,
                  })
               }
            />
         </form>
      </Col>
   );
};

export default TodoForm;
