import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./slice/CounterSlice";
import CartFavslice from "./slice/CartFavslice";

export const store = configureStore({
    reducer:{
        counter:counterReducer,
        team:CartFavslice,
    }
})