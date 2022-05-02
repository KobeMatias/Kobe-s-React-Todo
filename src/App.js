import React from "react";
import './App.css';
import Title from './Components/Title.js';
import Form from './Components/Form.js';
import Task from './Components/Task.js';
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebase-config";

function App() {
  const [tasks, setTasks] = React.useState([]);

  React.useEffect(() => {
    const q = query(collection(db, "Tasks"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let taskArray = [];
      querySnapshot.forEach((doc) => {
        taskArray.push({ ...doc.data(), id: doc.id });
      });
      setTasks(taskArray);
      console.log(taskArray)
    });
    return () => unsub();
  }, []);

  const handleEdit = async (task, title) => {
    await updateDoc(doc(db, "Tasks", task.id), { taskName: title });
  };
  const toggleComplete = async (task) => {
    await updateDoc(doc(db, "Tasks", task.id), { Completed: !task.completed });
  };
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "Tasks", id));
  };
  return (
    <div className="App">
      <div className='Container'>
        <Title />
        <Form />
      </div>
      <div className="taskContainer">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            toggleComplete={toggleComplete}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
