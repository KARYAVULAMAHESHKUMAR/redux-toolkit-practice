
import React,{useState} from 'react';
const TestValues =(props)=>{

    console.log("props123",props)
    const [testValue, setTestValue] = useState("values iste baguntadhi");

    const handleTest =() =>{
        props?.getValues(testValue)
        setTestValue("govindha")

    }

    return(

        <div>
<button onClick={handleTest}>test button</button>
        </div>
    )


}
export default TestValues;