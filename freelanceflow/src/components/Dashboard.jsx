import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import TaskTable from "./TaskTable";
import TaskModal from "./TaskModal";
import { createTask, getTasks } from "../services/api";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [open, setOpen] = useState(false);

  // 🔵 STEP: Fetch tasks on load
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await getTasks();
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // 🔵 STEP: Add task
  const handleAddTask = async (title) => {
    try {
      await createTask({ title });
      fetchTasks();
      setOpen(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="layout">
      <Sidebar />
      <div className="main">
        <Navbar openModal={() => setOpen(true)} />
        <TaskTable tasks={tasks} />
      </div>

      {open && <TaskModal close={() => setOpen(false)} add={handleAddTask} />}
    </div>
  );
}

export default Dashboard;