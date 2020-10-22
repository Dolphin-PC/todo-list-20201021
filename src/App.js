import { Container } from "@material-ui/core";
import React from "react";
import { Col } from "reactstrap";
import TodoForm from "./components/layout/TodoForm";
import TodoList from "./components/layout/TodoList";
import "./style/App.css";

function App() {
   return (
      <Container>
         <Col
            lg="12"
            style={{
               position: "sticky",
               top: 0,
               backgroundColor: "white",
               zIndex: 2,
            }}
         >
            <h3>TODO LIST</h3>

            <TodoForm />
         </Col>
         <TodoList />
      </Container>
   );
}

export default App;
