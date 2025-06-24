import { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000")
      .then((res) => res.text())
      .then((data) => setMessage(data));
  }, []);

  return (
    <div className="bg-purple-900 text-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">GameLife 🎮</h1>
      <p className="text-xl">Backend says: "{message}"!</p>
    </div>
  );
}
export default App;
