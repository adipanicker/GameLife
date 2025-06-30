const TaskItem = ({ task, toggleTask, deleteTask }) => {
  return (
    <li
      className={`flex items-center p-3 rounded ${
        task.completed ? "bg-gray-800" : "bg-gray-700"
      }`}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task._id)}
        className="mr-3 h-5 w-5"
      />
      <span
        className={`flex-grow ${
          task.completed ? "line-through text-gray-400" : ""
        }`}
      >
        {task.title} ({task.points} points)
      </span>
      <button
        onClick={() => deleteTask(task._id)}
        className="text-red-500 hover:text-red-400"
      >
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
