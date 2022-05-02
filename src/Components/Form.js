import React, { useState } from 'react';
import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";

export default function Form() {
    const [taskName, setTaskName] = useState("");
    // const [priority, setPriority] = useState("");

    //Handle task input function
    const createTask = async (e) => {
        //prevent page refresh
        e.preventDefault();
        //Push task data to database
        if (taskName !== "") {
            await addDoc(collection(db, "Tasks"), {
                taskName,
                // priority,
                Completed: false,
            })
        }
    };

    return (
        <form className='taskCreateForm' onSubmit={createTask}>
            <input
                type='text'
                placeholder='Enter Task'
                className='taskInput'
                value={taskName}
                required
                onChange={(e) => {
                  setTaskName(e.target.value);
                }}
            />
            {/* <select 
                value={priority} 
                required 
                onChange={(e) => {
                  setPriority(e.target.value)
                }}>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>                
            </select> */}
            <button className='btnAdd' type='submit'>Add Task</button>
        </form>
    )
}