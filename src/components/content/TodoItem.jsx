import { Button, styled, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Col } from "reactstrap";
import { DELETE_TODO, UPDATE_TODO } from "../../data/type";

const TodoItem = (props) => {
   const { todo } = props;
   const [isUpdate, setIsUpdate] = useState(false);
   const [updateTodoText, setUpdateTodoText] = useState(todo.text);
   const dispatch = useDispatch();

   const handleOnUpdate = () => {
      dispatch({
         type: UPDATE_TODO,
         payload: {
            id: todo.id,
            text: updateTodoText,
         },
      });
      setIsUpdate(false);
   };

   const handleOnDelete = () => {
      dispatch({
         type: DELETE_TODO,
         payload: todo.id,
      });
   };
   return (
      <div style={{ display: "flex", alignItems: "center" }}>
         {isUpdate ? (
            <>
               <TextField
                  fullWidth
                  required
                  value={updateTodoText}
                  onChange={(e) => setUpdateTodoText(e.target.value)}
               />
               &emsp;
               <CustomButton
                  variant="contained"
                  color="inherit"
                  onClick={handleOnUpdate}
               >
                  저장
               </CustomButton>
            </>
         ) : (
            <>
               <TextField disabled fullWidth value={todo.text} />
               &emsp;
               <CustomButton
                  variant="contained"
                  color="primary"
                  onClick={() => setIsUpdate(true)}
               >
                  수정
               </CustomButton>
            </>
         )}

         <CustomButton
            variant="contained"
            color="secondary"
            onClick={handleOnDelete}
         >
            삭제
         </CustomButton>
      </div>
   );
};

export default TodoItem;

const CustomButton = styled(Button)({
   margin: 10,
});
