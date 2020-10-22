import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import TodoItem from "../content/TodoItem";

const TodoList = () => {
   const todos = useSelector((state) => state.todo.todos);
   console.info(todos);

   return (
      <div>
         {todos.map((todo, index) => {
            return (
               <div style={{ margin: 20 }} key={index}>
                  <TodoItem todo={todo} />
               </div>
            );
         })}
      </div>
   );
};

export default TodoList;
