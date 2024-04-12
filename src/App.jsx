import { useState } from 'react'
import './App.css'
import React from 'react'
import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem';
import Stats from './components/Stats';



const App = () => {
    const [toDoList, setTodoList] = useState([]);

    const addTask = (taskName) => {
        const newTask = { taskName, checked: false };
        setTodoList([...toDoList, newTask])
    }
    function deleteTask(deleteTaskName) {
        setTodoList(toDoList.filter(task => task.taskName !== deleteTaskName));
    }

    function toggleCheck(taskName) {
        setTodoList((prevTodoList) =>
            prevTodoList.map((task) =>
                task.taskName === taskName ? {...task, 
                checked: !task.checked} : task,
            ),
        );
    }

    return (
        <>
        <div className='container'>
            <h1>Task Manager</h1>

            <TaskInput addTask={addTask} />

            <div className="toDoList">
                <span>To do</span>
                <ul className='list-items'>
                    {toDoList.map((task, key) => (
                        <TaskItem task={task} key={key} 
                            deleteTask={deleteTask}
                            toggleCheck={toggleCheck} />
                    ))}
                </ul>

                {toDoList.length === 0 ? (
                    <p className='notify'>No tasks left to complete!</p>
                ) : null}
            </div>
        </div>
        <Stats toDoList={toDoList} />
        </>
    )
}

export default App