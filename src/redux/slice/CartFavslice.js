import {createSlice} from "@reduxjs/toolkit"

const CartFavslice = createSlice({
    name:'fav',
    initialState:{
        clubname:[],
    },
    reducers:{
        addfav:(state,action)=>{
            state.clubname.push(action.payload); 
        },
    }
})

export const {addfav} = CartFavslice.actions;

export default CartFavslice.reducer;