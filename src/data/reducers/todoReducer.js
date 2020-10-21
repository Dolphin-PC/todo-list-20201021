import { CREATE_TODO, READ_TODO, UPDATE_TODO, DELETE_TODO } from '../type'

export default (state, action) => {
    switch (action.type) {
        case CREATE_TODO:
            return {
                ...state,
                todos: [...state, action.payload],
            },
        
        case READ_TODO:
            return {
                ...state
            },
        
        case UPDATE_TODO:
            return {
                ...state,
                todos : state.todos.map(todo => todo.id === action.payload.id ? action.payload : todo)
            }
        
        case DELETE_TODO:
            return {
                ...state,
                todos : state.todos.filter(todo => todo.id !== action.payload)
            }
    }
}