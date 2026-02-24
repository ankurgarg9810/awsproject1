function Navbar({ openModal }) {
  return (
    <div className="navbar">
      <h3>Dashboard</h3>

      <button className="primary-btn" onClick={openModal}>
        + Add Task
      </button>
    </div>
  );
}

export default Navbar;