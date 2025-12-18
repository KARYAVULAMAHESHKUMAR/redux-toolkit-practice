import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./components/others/CounterSlice";



export const store = configureStore({
    reducer:{
        counter:counterReducer

    }
})