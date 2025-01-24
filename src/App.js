import React, { useState } from "react";
import "./App.css";

const images = [
  { src: "/images/bp.jpg", name: "bp" },
  { src: "/images/starwars.jpg", name: "starwars" },
  { src: "/images/mario.jpg", name: "mario" }
];

function App() {
  const [currentImage, setCurrentImage] = useState({});
  const [hiddenGrid, setHiddenGrid] = useState([]);
  const [input, setInput] = useState("");
  const [score, setScore] = useState(24);
  const [result, setResult] = useState(null);

  const startGame = () => {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setCurrentImage(randomImage);

    // สร้าง Grid ปิดภาพทั้งหมด (6x4)
    const grid = Array(24).fill(true); // 6x4 = 24 ช่อง
    setHiddenGrid(grid);

    setInput("");
    setScore(24);
    setResult(null);
  };

  const revealTile = (index) => {
    const newGrid = [...hiddenGrid];
    newGrid[index] = false; // เปิดแผ่นป้าย
    setHiddenGrid(newGrid);
    setScore((prev) => prev - 1); // หักคะแนน
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
      <div className="row">
        <h1>เกมเปิดแผ่นป้ายทายภาพ - คะแนน: {score}</h1> 
      </div>
      {result && <p className="result">{result}</p>}
      <button onClick={startGame}>เริ่มเกมใหม่</button>
      {currentImage.src && (
        <div className="game-area">
          <div
            className="image-container"
            style={{
              width: "560px", // กำหนดความกว้าง
              height: "767px", // กำหนดความสูง
              position: "relative",
              margin: "20px auto", // จัดกึ่งกลาง
              border: "2px solid #000"
            }}
          >
            {hiddenGrid.map((hidden, index) => {
              const row = Math.floor(index / 4); // 4 คอลัมน์
              const col = index % 4; // คำนวณตำแหน่งคอลัมน์
              return (
                <div
                  key={index}
                  className={`index-${index} tile ${hidden ? "hidden" : ""}`}
                  style={{
                    position: "absolute",
                    top: `${row * 16.67}%`, // 6 แถว = 16.67% ต่อแถว
                    left: `${col * 25}%`, // 4 คอลัมน์ = 25% ต่อคอลัมน์
                    width: "25%", // กว้าง 25%
                    height: "16.67%", // สูง 16.67%
                    backgroundImage: hidden ? "none" : `url(${currentImage.src})`,
                    backgroundSize: "400% 600%", // ขนาด background ครอบ 6x4 grid
                    backgroundPosition: `${-col * 100}% ${-row * 100}%`, // ตำแหน่ง background
                    backgroundColor: hidden ? "#ccc" : "transparent", // สีพื้นหลังแผ่นป้าย
                    border: "1px solid #fff"
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
          
        </div>
      )}
    </div>
  );
}

export default App;
