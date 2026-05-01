import React, { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(0);

  const generateNumber = () => {
    const newNumber = Math.floor(Math.random() * 100) + 1;
    setNumber(newNumber);
  };

  return (
    <div className="container">
      <h1>Random Number</h1>
      <div className="number-display">{number}</div>
      <button onClick={generateNumber}>Generate New Number</button>
    </div>
  );
}

export default App;