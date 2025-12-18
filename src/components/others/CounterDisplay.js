import { useSelector } from "react-redux";


const CounterDisplay =() =>{


    const countvalue =useSelector((state)=> state.counter.count)

    return (
        <div>
            <h1>Counter {countvalue}</h1>
        </div>
    )
}


export default CounterDisplay;