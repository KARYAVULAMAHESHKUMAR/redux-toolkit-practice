import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./components/others/CounterSlice";
import userReducer from './components/users/userSlice';


export const store = configureStore({
    reducer:{
        counter:counterReducer,
        users:userReducer
    },
    
})
 