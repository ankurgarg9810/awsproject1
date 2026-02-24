function TaskCard({ task, toggleStatus, deleteTask }) {
  return (
    <div className="task-card">
      <div>
        <h3>{task.title}</h3>
        <p>Deadline: {task.deadline}</p>
      </div>

      <div className="actions">
        <span
          className={`status ${task.status === "Completed" ? "completed" : ""}`}
          onClick={() => toggleStatus(task.id)}
        >
          {task.status}
        </span>

        <button onClick={() => deleteTask(task.id)}>❌</button>
      </div>
    </div>
  );
}

export default TaskCard;