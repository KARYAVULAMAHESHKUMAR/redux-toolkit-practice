import { useSelector } from "react-redux";


const CounterDisplay =() =>{


    const countvalue =useSelector((state)=> state.counter.count)
console.log("value iscountvalue", countvalue)
    return (
        <div>
            <h1>Counter {countvalue}</h1>
        </div>
    )
}


export default CounterDisplay;