import React, {useState} from 'react';
import './App.css';


import { Board } from './components/Board';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const handleBoxClick = (boxIdx) => {
    // Step 1: Update the board
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying ? "X" : "O";
      } else {
        return value;
      }
    })
  return (
    <div className="App">
      <Board board={board} onClick={null} />
    </div>
  );
}

export default App;
