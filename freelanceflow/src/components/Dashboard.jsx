import { useState } from "react";
import Navbar from "./Navbar";
import TaskForm from "./TaskForm";
import TaskCard from "./TaskCard";

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([task, ...tasks]);
  };

  const toggleStatus = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status:
                task.status === "Pending" ? "Completed" : "Pending",
            }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <TaskForm addTask={addTask} />
        <div className="task-list">
          {tasks.length === 0 && <p>No tasks yet 🚀</p>}
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              toggleStatus={toggleStatus}
              deleteTask={deleteTask}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Dashboard;