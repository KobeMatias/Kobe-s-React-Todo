import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Task({
    task,
    toggleComplete,
    handleDelete,
    handleEdit,
    }) {
    const [newTaskName, setNewTaskName] = React.useState(task.taskName);

    const handleChange = (e) => {
      e.preventDefault();
      if (task.complete === true) {
          setNewTaskName(task.taskName);
      } else {
          task.taskName = "";
          setNewTaskName(e.target.value);
      }
    };

    return (
        <div className="task">
            <input
                style={{ textDecoration: task.completed && "line-through" }}
                type="text"
                value={task.taskName === "" ? newTaskName : task.taskName}
                className="list"
                onChange={handleChange}
            />
            <div>
                <button className="completeBtn" //Task name & edit name
                    onClick={() => {
                      toggleComplete(task)
                    }}
                >
                    <CheckCircleIcon id="i" />
                </button>
                <button className="editBtn" //Edit Button
                    onClick={() => 
                      handleEdit(task, newTaskName)
                    }
                >
                    <EditIcon id="i" />
                </button>
                <button className="deleteBtn" //Delete Button
                    onClick={() => 
                      handleDelete(task.id)
                    }
                >
                    <DeleteIcon id="i" />
                </button>
            </div>
        </div>
    )
}