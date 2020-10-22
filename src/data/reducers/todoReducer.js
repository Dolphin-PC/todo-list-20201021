import { CREATE_TODO, READ_TODO, UPDATE_TODO, DELETE_TODO } from "../type";

const initialState = {
   todos: [],
};

// ... Spread 연산자는 결합을 쉽게 할 수 있는 장점이 있다.
// 쉽게 UpSert(Update + inSert)라고 보면 된다.
// 이름이 같은 것이 있다면 덮어쓰고, 없다면 추가한다.
export default (state = initialState, action) => {
   switch (action.type) {
      case CREATE_TODO:
         return {
            // 원래 있던 state 객체에 이름이 동일한 [todos]배열을 덮어씌운다.
            ...state,
            todos: [...state.todos, action.payload],
            // 여기서는 [todos]배열에 payloaDELETE_TODOd로 받은 값을 추가한다.
         };

      // case READ_TODO:
      //    return {
      //       state,
      //    };

      case UPDATE_TODO:
         return {
            ...state,
            todos: state.todos.map((todo) =>
               todo.id === action.payload.id ? action.payload : todo
            ),
         };

      case DELETE_TODO:
         return {
            ...state,
            todos: state.todos.filter((todo) => todo.id !== action.payload),
         };

      default:
         return state;
   }
};
