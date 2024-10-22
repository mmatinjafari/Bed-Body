import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState(""); // Holds the input value
  const [greeting, setGreeting] = useState(""); // Holds the greeting

  // Function to update the greeting
  const handleGreet = () => {
    setGreeting(`Hello ${name}`);
  };

  return (
    <div className="App">
      <h1>Greet Me App</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleGreet}>Greet</button>
      <h2>{greeting}</h2> {/* Displays the greeting */}
    </div>
  );
}

export default App;
