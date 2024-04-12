import React, { useState } from 'react'

const TaskInput = ({ addTask }) => {
    const [task, setTask] = useState('')

  
    function handleChange(e) {
        setTask(e.target.value);
    }

    function handleAddTask(e) {
        e.preventDefault();
        if(task.trim() === "") return;
        addTask(task);     
        setTask("")
    }

    return (
        <form className='inputField' onSubmit={handleAddTask}>
            <input
                type="text"
                placeholder='Add task...'
                value={task}
                onChange={handleChange}
            />
            <button >+</button>
        </form>
    )
}

export default TaskInput