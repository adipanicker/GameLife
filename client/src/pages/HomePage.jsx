import { useState, useEffect } from "react";
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/api/tasks");
    const data = await res.json();
    setTasks(data);
  };

  const addTask = async () => {
    if (!newTask.trim()) return;
    await fetch("http://localhost:5000/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newTask }),
    });
    setNewTask("");
    fetchTasks();
  };
  const toggleTask = async (id) => {
    await fetch(`http://localhost:5000/api/tasks/${id}`, {
      method: "PATCH",
    });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/api/tasks/${id}`, {
      method: "DELETE",
    });
    fetchTasks();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">GameLife 🎮</h1>
        <Link
          to="/login"
          className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded"
        >
          Sign In
        </Link>
      </header>

      <AddTask newTask={newTask} setNewTask={setNewTask} addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </div>
  );
};

export default HomePage;
