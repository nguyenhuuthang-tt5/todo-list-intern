import { configureStore } from "@reduxjs/toolkit"
import todoListSlice from "./todoListSlice"
import visibleLayout from "./visibleLayout"
import todoDetail from "./todoDetail"

export default configureStore({
    reducer: {
        todoList: todoListSlice,
        visibleLayout: visibleLayout,
        todoDetail: todoDetail
    }
})