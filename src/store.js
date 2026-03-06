import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./components/others/CounterSlice";
import userReducer from './components/users/userSlice';
import ReduxSlice from "./components/forredux/ReduxSlice";


export const store = configureStore({
    reducer:{
        counter:counterReducer,
        users:userReducer,
        redux:ReduxSlice
    },
    
})
 