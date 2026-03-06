import { createSlice } from "@reduxjs/toolkit";



const CounterSlicce = createSlice ({
    name:"Counter",
    initialState:{count:10},
    reducers:{

        increament:(state) =>{
            state.count = state.count +1 
        },
        
        decreament:(state)=>{
            if(state.count > 0){
            state.count = state.count -1
            }

        },

        reset:(state) => {
            state.count = 0
        },
        changingValues:(state)=>{
            state.count = state.count *5
        }
    }
})
 

export const {increament,decreament,reset,changingValues} = CounterSlicce.actions;

export default CounterSlicce.reducer;


