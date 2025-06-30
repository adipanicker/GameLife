const AddTask = ({ newTask, setNewTask, addTask }) => {
  return (
    <div className="flex mb-6">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task..."
        className="px-4 py-2 rounded-l bg-gray-800 text-white flex-grow"
      />
      <button
        onClick={addTask}
        className="bg-purple-600 px-4 py-2 rounded-r hover:bg-purple-700"
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;
