import { useState } from "react";

function TaskModal({ close, add }) {
  const [title, setTitle] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title) return;
    add(title);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Create New Task</h3>

        <form onSubmit={submit}>
          <input
            type="text"
            placeholder="Task title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <div className="modal-actions">
            <button type="button" onClick={close}>
              Cancel
            </button>
            <button className="primary-btn" type="submit">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaskModal;