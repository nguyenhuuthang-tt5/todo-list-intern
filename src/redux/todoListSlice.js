import { createSlice } from "@reduxjs/toolkit";

export const todoListSlice = createSlice({
    name: "todoList",
    initialState: {
        value: [],
    },
    reducers: {
        addTodo: (state, action) => {
            // state.value = [
            //     ...state.value,
            //     action.payload
            // ]
            //
            state.value.push(action.payload);
        },
        updateTodo: (state, action) => {
            state.value = [
                ...state.value.map((todo) => (
                    todo.id === action.payload.id
                        ? { ...todo, content: action.payload.content, hastag: action.payload.hastag }
                        : todo
                ))
            ]
        },
        deleteTodo: (state, action) => {
            state.value = [
                ...state.value.filter((todo) => 
                    todo.id !== action.payload
                )
            ]
        },
        changeCompleteTodo: (state, action) => {
            state.value = [
                ...state.value.map((todo) => (
                    todo.id === action.payload 
                        ? { ...todo, isCompleted: !todo.isCompleted }
                        : todo
                ))
            ]
        }
        
    }
})

export const { addTodo, updateTodo, deleteTodo, changeCompleteTodo } = todoListSlice.actions
export default todoListSlice.reducer