import { createSlice } from "@reduxjs/toolkit";

export const visibleLayout = createSlice({
    name: "visibleLayout",
    initialState: {
        visibleAddModal: false,
        visibleDetailModal: false,
        visibleAddHastag: false,
        visibleEditHastag: false,
    },
    reducers: {
        changeVisibleAddModal: state => {
            state.visibleAddModal = !state.visibleAddModal
        },
        changeVisibleDetailModal: state => {
            state.visibleDetailModal = !state.visibleDetailModal
        },
        changeVisibleAddHastag: state => {
            state.visibleAddHastag = !state.visibleAddHastag
        },
        changeVisibleEditlHastag: state => {
            state.visibleEditHastag = !state.visibleEditHastag
        },
    }
})

export const {changeVisibleAddModal, changeVisibleDetailModal, changeVisibleAddHastag, changeVisibleEditlHastag} = visibleLayout.actions
export default visibleLayout.reducer