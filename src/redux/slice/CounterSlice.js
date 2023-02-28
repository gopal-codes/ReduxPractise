import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:"counting",
    initialState:{
        count:0
    },
    reducers:{
        increment:(state)=>{
            state.count += 1;
        },
        decrement:(state)=>{
            state.count -= 1;
        },
        incrementbyamount:(state,action)=>{
            state.count += action.payload;
        }
    }
});

export const {increment,decrement,incrementbyamount} = counterSlice.actions;

export default counterSlice.reducer;
