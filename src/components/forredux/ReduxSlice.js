import { createSlice } from "@reduxjs/toolkit";

const ResduxSlice = createSlice({

    name: 'counter',

    // ✅ employees must be inside initialState
    initialState: {
        value: 10,
        employees: []
    },

    reducers: {

        increament: (state) => {
            state.value = state.value + 5
        },

        decreament: (state) => { 
            state.value = state.value - 1
        },

        reset: (state) => {
            state.value = 0
        }, 

        addEmployee: (state, action) => {
            debugger
            state.employees.push(action.payload);
        },

        deleteEmployee: (state, action) => {
            state.employees = state.employees.filter(   
                (emp) => emp.id !== action.payload
            );
        },
  
        updateEmployee: (state, action) => {
            debugger
            const index = state.employees.findIndex(
                (emp) => emp.id === action.payload.id
            );

            if (index !== -1) {
                state.employees[index] = action.payload;
            }
        }
    }
})

export const {
    increament,
    decreament,
    reset,
    addEmployee,
    deleteEmployee,
    updateEmployee
} = ResduxSlice.actions;

export default ResduxSlice.reducer;