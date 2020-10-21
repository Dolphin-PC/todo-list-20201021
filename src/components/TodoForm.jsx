import { TextField } from "@material-ui/core";
import React, { useState } from "react";

const TodoForm = () => {
   const [todo, setTodo] = useState("");

   const handleSubmit = () => {};

   return (
      <form onSubmit={handleSubmit}>
         <TextField
            required
            fullWidth
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
         />
      </form>
   );
};

export default TodoForm;
