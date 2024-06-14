import { createSlice } from "@reduxjs/toolkit";

const ratingSlice= createSlice({
    name:"ratings",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            const empty = action.payload;
            state.items=empty;
        }
    }
})

export const {addItem} =ratingSlice.actions;
export default ratingSlice.reducer;