import React, { useState } from "react";
import "./App.css";
const imagesObj = {
  'Angelina_Jolie' : [
    'Angelina_Jolie-1.jpg',
    'Angelina_Jolie-2.jpg',
    'Angelina_Jolie-3.jpg',
],
'Anne_Hathaway' : [
  'Anne_Hathaway-1.jpg',
  'Anne_Hathaway-2.jpg',
  'Anne_Hathaway-3.jpg',
  'Anne_Hathaway-4.jpg',
],
'Brad_Pitt' : [
  'Brad_Pitt-1.jpg',
  'Brad_Pitt-2.jpg',
  'Brad_Pitt-3.jpg',
],
'Brie_Larson' : [
  'Brie_Larson-1.jpg',
  'Brie_Larson-2.jpg',
  'Brie_Larson-3.jpg',
  'Brie_Larson-4.jpg',
],
'Charlize_Theron' : [
  'Charlize_Theron-1.jpg',
  'Charlize_Theron-2.jpg',
  'Charlize_Theron-3.jpg',
],
'Chris_Evans' : [
  'Chris_Evans-1.jpg',
  'Chris_Evans-2.jpg',
  'Chris_Evans-3.jpg',
  'Chris_Evans-4.jpg',
],
'Chris_Hemsworth' : [
  'Chris_Hemsworth-1.jpg',
  'Chris_Hemsworth-2.jpg',
  'Chris_Hemsworth-3.jpg',
],
'Emma_Stone' : [
  'Emma_Stone-1.jpg',
  'Emma_Stone-2.jpg',
  'Emma_Stone-3.jpg',
],
'Emma_Watson' : [
  'Emma_Watson-1.jpg',
  'Emma_Watson-2.jpg',
  'Emma_Watson-3.jpg',
  'Emma_Watson-4.jpg',
],
'Gal_Gadot' : [
  'Gal_Gadot-1.jpg',
  'Gal_Gadot-2.jpg',
  'Gal_Gadot-3.jpg',
],
'Hugh_Jackman' : [
  'Hugh_Jackman-1.jpg',
  'Hugh_Jackman-2.jpg',
  'Hugh_Jackman-3.jpg',
  'Hugh_Jackman-4.jpg',
  'Hugh_Jackman-5.jpg',
],
'Jake_Gyllenhaal' : [
  'Jake_Gyllenhaal-1.jpg',
  'Jake_Gyllenhaal-2.jpg',
  'Jake_Gyllenhaal-3.jpg',
  'Jake_Gyllenhaal-4.jpg',
],
'Jason_Momoa' : [
  'Jason_Momoa-1.jpg',
  'Jason_Momoa-2.jpg',
  'Jason_Momoa-3.jpg',
  'Jason_Momoa-4.jpg',
],
'Jennifer_Lawrence' : [
  'Jennifer_Lawrence-1.jpg',
  'Jennifer_Lawrence-2.jpg',
  'Jennifer_Lawrence-3.jpg',
],
'Johnny_Depp' : [
  'Johnny_Depp-1.jpg',
  'Johnny_Depp-2.jpg',
  'Johnny_Depp-3.jpg',
],
'Keira_Knightley' : [
  'Keira_Knightley-1.jpg',
  'Keira_Knightley-2.jpg',
  'Keira_Knightley-3.jpg',
],
'Leonardo_DiCaprio' : [
  'Leonardo_DiCaprio-1.jpg',
  'Leonardo_DiCaprio-2.jpg',
  'Leonardo_DiCaprio-3.jpg',
],
'Margot_Robbie' : [
  'Margot_Robbie-1.jpg',
  'Margot_Robbie-1.jpg',
  'Margot_Robbie-2.jpg',
],
'Millie_Bobby_Brown' : [
  'Millie_BobbyBrown-1.jpg',
  'Millie_BobbyBrown-2.jpg',
  'Millie_BobbyBrown-3.jpg',
  'Millie_BobbyBrown-4.jpg',
],
'Natalie_Portman' : [
  'Natalie_Portman-1.jpg',
  'Natalie_Portman-2.jpg',
  'Natalie_Portman-3.jpg',
],
'Robert_Downey_Jr' : [
  'Robert_Downey_Jr.-1.jpg',
  'Robert_Downey_Jr.-2.jpg',
  'Robert_Downey_Jr.-3.jpg',
  'Robert_Downey_Jr.-4.jpg',
],
'Ryan_Gosling' : [
  'Ryan_Gosling-1.jpg',
  'Ryan_Gosling-2.jpg',
  'Ryan_Gosling-3.jpg',
],
'Sandra_Bullock' : [
  'Sandra_Bullock-1.jpg',
  'Sandra_Bullock-2.jpg',
  'Sandra_Bullock-3.jpg',
],
'Scarlett_Johansson' : [
  'Scarlett_Johansson-1.jpg',
  'Scarlett_Johansson-2.jpg',
  'Scarlett_Johansson-3.jpg',
],
'Timothee_Chalamet' : [
  'Timothée_Chalamet-1.jpg',
  'Timothée_Chalamet-2.jpg',
  'Timothée_Chalamet-3.jpg',
],
'Tom_Cruise' : [
  'Tom_Cruise-1.jpg',
  'Tom_Cruise-2.jpg',
  'Tom_Cruise-3.jpg',
],
'Tom_Holland' : [
  'Tom_Holland-1.jpg',
  'Tom_Holland-2.jpg',
  'Tom_Holland-3.jpg',
  'Tom_Holland-4.jpg',
],
'Will_Smith' : [
  'Will_Smith-1.jpg',
  'Will_Smith-2.jpg',
  'Will_Smith-3.jpg',
  'Will_Smith-4.jpg',
],
'Zoe_Saldana' : [
  'Zoe_Saldana-1.jpg',
  'Zoe_Saldana-2.jpg',
  'Zoe_Saldana-3.jpg',
  'Zoe_Saldana-4.jpg',
]
}

const imagesArray = [];

Object.entries(imagesObj).forEach(([name, files]) => {
  files.forEach((file) => {
    imagesArray.push({ src: `/images/${name}/${file}`, name });
  });
});
/*

const imagesArray = [
  { src: "/images/testtest/bp.jpg", name: "bp" },
  { src: "/images/testtest/starwars.jpg", name: "starwars" },
  { src: "/images/testtest/mario.jpg", name: "mario" }
];
*/

console.log(`log:tag:imagesArray`, imagesArray);

function App() {
  const [currentImage, setCurrentImage] = useState({});
  const [hiddenGrid, setHiddenGrid] = useState([]);
  const [input, setInput] = useState("");
  const [score, setScore] = useState(100);
  const [result, setResult] = useState(null);


  
  const startGame = () => {
    const randomImage = imagesArray[Math.floor(Math.random() * imagesArray.length)];
    console.log(`log:tag:randomImage`, randomImage);
    setCurrentImage(randomImage);

    // สร้าง Grid ปิดภาพทั้งหมด (4x6)
    const grid = Array(24).fill(true); // 4x6 = 24 ช่อง
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
          <div
            className="image-container"
            style={{
              width: "900px", // กำหนดความกว้าง
              height: "600px", // กำหนดความสูง
              position: "relative",
              margin: "20px auto", // จัดกึ่งกลาง
              border: "2px solid #000"
            }}
          >
            {hiddenGrid.map((hidden, index) => {
              const row = Math.floor(index / 6); // 6 คอลัมน์
              const col = index % 6; // คำนวณตำแหน่งคอลัมน์
              return (
                <div
                  key={index}
                  className={`index-${index} tile ${hidden ? "hidden" : ""}`}
                  style={{
                    position: "absolute",
                    top: `${row * 25}%`, // 4 แถว = 25% ต่อแถว
                    left: `${col * 16.67}%`, // 6 คอลัมน์ = 16.67% ต่อคอลัมน์
                    width: "16.67%", // กว้าง 16.67%
                    height: "25%", // สูง 25%
                    backgroundImage: hidden ? "none" : `url(${currentImage.src})`,
                    backgroundSize: "600% 400%", // ขนาด background ครอบ 4x6 grid
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
          <p>คะแนน: {score}</p>
          {result && <p className="result">{result}</p>}
        </div>
      )}
    </div>
  );
}


export default App;
