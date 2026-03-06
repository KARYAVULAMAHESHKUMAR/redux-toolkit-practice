import React, { useEffect } from "react";
import { deleteEmployee, increament, updateEmployee } from "./ReduxSlice";
import { decreament } from "./ReduxSlice";
import { reset, addEmployee, } from "./ReduxSlice";
import { useDispatch } from "react-redux";

const Redux2 = () => {
    const dispatch = useDispatch();

    const Increament = () => {
        dispatch(increament())
    }
    const Decreament = () => {
        dispatch(decreament())
    }
    const Reset = () => {
        dispatch(reset())
    }
    useEffect(() => {
        dispatch(addEmployee({ id: 1, name: "Mahesh", salary: 25000 }));
        dispatch(addEmployee({ id: 2, name: "Ravi", salary: 30000 }));
        dispatch(addEmployee({ id: 3, name: "anvesh", salary: 20000 }));
        dispatch(addEmployee({ id: 4, name: "raju", salary: 35000 }));
        dispatch(addEmployee({ id: 5, name: "pavan", salary: 25000 }));
        dispatch(addEmployee({ id: 6, name: "kalyan", salary: 35000 }));
        dispatch(addEmployee({ id: 7, name: "sreedhar", salary: 250000 }));
        dispatch(addEmployee({ id: 8, name: "vardhan", salary: 30060 }));
        dispatch(addEmployee({ id: 9, name: "Mahesh kumar", salary: 25000 }));
        dispatch(addEmployee({ id: 10, name: "vamshi", salary: 62000 }));
        dispatch(deleteEmployee(3));
        dispatch(updateEmployee({ id: 4, name: "jangan Mohan reddy", salary: 100000 }))
    }, [dispatch]);
    return (
        <div 
        //  style={{ display: "grid", justifyContent: "center", gap: '10px', border: '1px solid green', padding: '50px', borderRadius: '20px', margin: '600px' }}
         >
            <div>Second component</div>


            <button type='button' onClick={Increament}>Increament</button>
            {/* <button type='button'>decreament</button> */}
            <button type='button' onClick={Decreament}>decreament</button>
            <button type='button' onClick={Reset}>Reset</button>
        </div>

    )
}



export default Redux2;