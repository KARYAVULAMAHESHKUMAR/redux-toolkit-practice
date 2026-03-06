import React, { useRef, useState } from 'react';




const AddTask = () => {
    const [task, setTask] = useState('');
    const inputRef = useRef(null);
    const buttonRef = useRef(null);

    const handleAddTask = () => {
        const task = inputRef.current.value;
        console.log(inputRef)
        console.log(task);
        inputRef.current.value = '';
        const button = buttonRef.current.style.backgroundColor ='green';
    }
    const handleInput = (e) => {
        // setTask(e.target.value)
        // console.log(e.target.value)
    }

    return (
        <div class="flex justify-center items-center min-h-screen bg-gray-100">
            <input type="text" ref={inputRef}
            // value={task} onChange={handleInput}
            />
            <button onClick={handleAddTask} ref={buttonRef}>Add Task</button>
        </div>
    );

}

export default AddTask;