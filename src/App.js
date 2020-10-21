import { Container } from "@material-ui/core";
import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./style/App.css";

function App() {
   return (
      <Container
         style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
         }}
      >
         <h3>TODO LIST</h3>

         <TodoForm />
         <TodoList />
      </Container>
   );
}

export default App;
