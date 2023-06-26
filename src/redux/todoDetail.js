import { createSlice } from "@reduxjs/toolkit";

export const todoDetailSlice = createSlice({
    name: "todoDetail",
    initialState: {
        value: {},
    },
    reducers: {
        setTodoDetail: (state, action) => {
            state.value = {
                ...state.value,
                id: action.payload.id,
                content: action.payload.content,
                hastag: action.payload.hastag,
                isCompleted: action.payload.isCompleted
            }
        },
    }
})

export const { setTodoDetail } = todoDetailSlice.actions
export default todoDetailSlice.reducer