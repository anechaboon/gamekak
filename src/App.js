import React, { useState } from "react";
import "./App.css";

const images = [
  { src: "/images/bp.jpg", name: "bp" },
  { src: "/images/grid.jpg", name: "grid" }
];

function App() {
  const [currentImage, setCurrentImage] = useState({});
  const [hiddenGrid, setHiddenGrid] = useState([]);
  const [input, setInput] = useState("");
  const [score, setScore] = useState(100);
  const [result, setResult] = useState(null);

  const startGame = () => {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setCurrentImage(randomImage);

    // สร้าง Grid ปิดภาพทั้งหมด
    const grid = Array(16).fill(true); // 4x4
    setHiddenGrid(grid);

    setInput("");
    setScore(100);
    setResult(null);
  };

  const revealTile = (index) => {
    const newGrid = [...hiddenGrid];
    newGrid[index] = false; // เปิดแผ่นป้าย
    setHiddenGrid(newGrid);
    setScore((prev) => prev - 5); // หักคะแนน
  };

  const submitAnswer = () => {
    if (input.toLowerCase() === currentImage.name.toLowerCase()) {
      setResult("ถูกต้อง! 🎉");
    } else {
      setResult("ผิด! ลองอีกครั้ง...");
    }
  };

  return (
    <div className="App">
      <h1>เกมเปิดแผ่นป้ายทายภาพ</h1>
      <button onClick={startGame}>เริ่มเกมใหม่</button>
      {currentImage.src && (
        <div className="game-area">
          <div className="image-container">
          {hiddenGrid.map((hidden, index) => {
            const row = Math.floor(index / 4); 
            const col = index % 4; 

            return (
              <div
                key={index}
                className={`index-${index} tile ${hidden ? "hidden" : ""}`}
                style={{
                  top: `${row * 25}%`, 
                  left: `${col * 25}%`, 
                  width: "25%", 
                  height: "25%", 
                  backgroundImage: hidden ? "none" : `url(${currentImage.src})`, 
                  backgroundSize: "400%", 
                  backgroundPosition: `${-col * 100}% ${-row * 100}%` 
                }}
                onClick={() => revealTile(index)}
              ></div>
            );
          })}
            <img src={currentImage.src} alt="game" style={{ visibility: "hidden" }} />
          </div>
          <div className="controls">
            <input
              type="text"
              placeholder="พิมพ์คำตอบที่นี่..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={submitAnswer}>ส่งคำตอบ</button>
          </div>
          <p>คะแนน: {score}</p>
          {result && <p className="result">{result}</p>}
        </div>
      )}
    </div>
  );
}

export default App;
