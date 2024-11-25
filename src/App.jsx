import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, { text: taskInput, completed: false }]);
      setTaskInput("");
      toast.success("Qoshildi");
    } else {
      toast.error("Yozing");
    }
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
    toast.info(
      newTasks[index].completed ? "Zadacha qilindi" : "Zadacha yana aktiv"
    );
  };

  const deleteTask = (index) => {
    const taskToDelete = tasks[index];
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
    toast.error(`Zadacha "${taskToDelete.text}" ocirildi`);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Todo List</h1>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Qoshish"
        style={styles.input}
      />
      <button onClick={addTask} style={styles.button}>
        Qoshish
      </button>

      <ul style={styles.taskList}>
        {tasks.map((task, index) => (
          <li key={index} style={styles.taskItem}>
            <span
              onClick={() => toggleTask(index)}
              style={{
                ...styles.taskText,
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(index)}
              style={styles.deleteButton}
            >
              Ochirish
            </button>
          </li>
        ))}
      </ul>

      <ToastContainer />
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  },
  header: {
    textAlign: "center",
    color: "#333",
    marginBottom: "20px",
  },
  input: {
    width: "80%",
    padding: "10px",
    marginRight: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "16px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  taskList: {
    listStyleType: "none",
    padding: "0",
  },
  taskItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  taskText: {
    flex: 1,
    fontSize: "18px",
    cursor: "pointer",
  },
  deleteButton: {
    backgroundColor: "#f44336",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "5px 10px",
    cursor: "pointer",
  },
};

export default TodoApp;
