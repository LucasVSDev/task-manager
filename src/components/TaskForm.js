import React, { useContext, useState, useEffect } from "react";
import { TaskListContext } from '../context/TaskListContext'

const TaskForm = () => {
  const { addTask, clearList, editTask, editItem } = useContext(TaskListContext)
  const [title, setTitle] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!editItem) {
      addTask(title);
      setTitle('');
    } else {
      editTask(title, editItem.id)
    }
  }

  const handleChange = e => {
    setTitle(e.target.value);
  };

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title)
    } else {
      setTitle('')
    }
  }, [editItem])

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Add Task..."
        onChange={handleChange}
        value={title}
        required
        className="task-input"
      />
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          {editItem ? 'Edit Task' : 'Add'}
        </button>
        <button className="btn clear-btn" onClick={clearList}>
          Limpar
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
