
import React,{useState} from 'react';


const MySecondcomponent = (props) => {
    console.log("props",props)
    const [value,setvalue]=useState('rajugaru');
    const handleValue=()=>{
        setvalue("narendra modi")
        props?.getData(value)
console.log(props)
    }
    return (
        <div>
            
            <button onClick={handleValue}>userDatails </button>
        </div>
        
    )
}


export default MySecondcomponent;