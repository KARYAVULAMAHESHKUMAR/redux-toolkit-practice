import { useDispatch } from "react-redux";

import {increament} from "./CounterSlice";
import {decreament} from "./CounterSlice";
import {reset} from "./CounterSlice";

const CounterControlls =() =>{

    const Dispatch =useDispatch();

    const incrementHandler =() =>{
        Dispatch(increament())
    }

    // const decreamentHandler = () =>{

    //     Dispatch(decreament())
    // }

    const resetHandler =() =>{

        Dispatch(reset())
    }

    return (
        <div>
            <h1>Controlls</h1>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={() =>Dispatch(decreament())}>Decrease</button>
            <button onClick = {resetHandler}>Reset</button>
        </div>
    )
}


export default CounterControlls;