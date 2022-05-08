import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    data: null,
    id: null,
    singlePostData: null
}

const post = createSlice({
    name: 'post',
    initialState,
    reducers: {
        dataAC(state, action) {
            state.data = action.payload
        },
        idAC(state, action) {
            state.id = action.payload
        },
        singlePostDataAC(state, action) {
            state.singlePostData = action.payload
        }
    }
})

export const {dataAC, idAC, singlePostDataAC} = post.actions;
export default post.reducer;