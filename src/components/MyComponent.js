


import React,{useState} from 'react';


const MyComponent = (props) => {

const [man,setMan] = useState('kumar');

    console.log(props)
    const handleInputChange = (e) => {
        console.log(e)
        let value=e.target.value;
        console.log(value)
    

    }

    const handleBtnClick = () => {
            setMan("mahesh kumar yadav")
        props.getData(man)
        console.log("button clcicked successfully")
    }
    return (
        <div>
            <form>
                <input type='text' placeholder='enater value' onChange={handleInputChange} />
                <button type='button' onClick={handleBtnClick}>Add User</button>
            </form>
            <h1>{props.data}</h1>
        </div>
    )
}


export default MyComponent;