import React, { useState, useEffect } from "react";
import treeImage from "../assets/tree.png";
import lightOn from "../assets/lighton.svg";
import lightOff from "../assets/lightoff.svg";
import ballRed from "../assets/ballred.svg";
import ballGreen from "../assets/ballgreen.svg";
import ballBlue from "../assets/ballblue.svg";
import ballOrange from "../assets/ballorange.svg";
import boxBlue from "../assets/boxblue.svg";
import boxRed from "../assets/boxred.svg";
import boxYellow from "../assets/boxyellow.svg";
import Ball from "./Ball";
import ConnectionLine from "./ConnectionLine";
import BoxRow from "./BoxRow";
import Snowfall from "./Snowfall"; // Snowfall 컴포넌트 추가
import "./../styles/Snowfall.css"; // Snowfall CSS 추가

const ChristmasTree = () => {
  const [isLightOn, setIsLightOn] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [savedValues, setSavedValues] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [boxValues, setBoxValues] = useState([
    70, 79, 82, 143, 204, 224, 229, 399, 461, 543,
  ]);
  const specialMessages = [
    "F",
    "O",
    "R",
    "IF",
    "HAC",
    "KAT",
    "HON",
    "MERRY",
    "CHRIST",
    "MAS~~!!",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLightOn((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // 엔터 키 입력 처리 함수
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (savedValues.length >= 10) {
        setErrorMessage("You cannot add more than 10 items.");
        setTimeout(() => setErrorMessage(""), 2000);
        return;
      }

      if (inputValue.trim() !== "") {
        const newValues = [...savedValues, inputValue];
        setSavedValues(newValues);
        setInputValue("");

        if (newValues.length === 10) {
          setTimeout(() => setIsVisible(true), 1000);
        }
      }
    }
  };

  // 버튼 클릭 이벤트 핸들러
  const handleButtonClick = () => {
    setTimeout(() => {
      setBoxValues(specialMessages); // 박스 값을 지정한 문자열로 변경
    }, 1000); // 1초 후 실행
  };

  const positions = [
    {
      id: 1,
      position: { top: "30%", left: "50%" },
      color: ballRed,
      value: "229",
    },
    {
      id: 2,
      position: { top: "45%", left: "45%" },
      color: ballGreen,
      value: "82 204",
    },
    {
      id: 3,
      position: { top: "45%", left: "55%" },
      color: ballBlue,
      value: "461",
    },
    {
      id: 4,
      position: { top: "60%", left: "42%" },
      color: ballOrange,
      value: "70 79",
    },
    {
      id: 5,
      position: { top: "57%", left: "45%" },
      color: ballBlue,
      value: "82 143",
    },
    {
      id: 6,
      position: { top: "61%", left: "49%" },
      color: ballRed,
      value: "204 224",
    },
    {
      id: 7,
      position: { top: "65%", left: "53%" },
      color: ballOrange,
      value: "229 399",
    },
    {
      id: 8,
      position: { top: "63%", left: "57%" },
      color: ballGreen,
      value: "461 543",
    },
  ];

  const connections = [
    { start: positions[0].position, end: positions[1].position },
    { start: positions[0].position, end: positions[2].position },
    { start: positions[1].position, end: positions[3].position },
    { start: positions[1].position, end: positions[4].position },
    { start: positions[1].position, end: positions[5].position },
    { start: positions[2].position, end: positions[6].position },
    { start: positions[2].position, end: positions[7].position },
  ];

  const boxColors = [boxBlue, boxRed, boxYellow];

  return (
    <div
      className="bg-gray-800 min-h-screen flex items-center justify-center relative"
      style={{
        position: "relative",
        overflow: "visible",
      }}
    >
      {/* 눈 내리는 효과 추가 */}
      <Snowfall />
      {/* 입력 필드 */}
      <div
        style={{
          position: "absolute",
          top: "5%",
          left: "50%",
          transform: "translate(-50%, 0)",
          zIndex: 3,
        }}
      >
        <input
          type="text"
          placeholder="Insert a value"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{
            width: "250px",
            height: "50px",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            borderRadius: "5px",
            textAlign: "center",
            backgroundColor: "transparent",
            fontSize: "24px", // 글씨 크기 키움
            color: "white",
          }}
        />
        {errorMessage && (
          <div
            style={{
              marginTop: "10px",
              color: "red",
              fontSize: "14px",
              textAlign: "center",
            }}
          >
            {errorMessage}
          </div>
        )}
        {/* 버튼 추가 */}
        <div
          style={{
            marginTop: "60px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button
            onClick={handleButtonClick}
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%", // 동그라미 버튼
              backgroundColor: "rgba(255, 255, 255, 0)", // 투명 배경
              border: "1px solid rgba(255, 255, 255, 0)", // 투명 경계선
              cursor: "pointer",
              fontSize: "20px",
              color: "white",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)", // 텍스트 그림자
            }}
          ></button>
        </div>
      </div>
      {/* 저장된 값 표시 (왼쪽 상단) */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          backgroundColor: "black",
          color: "white",
          padding: "10px",
          borderRadius: "5px",
          zIndex: 3,
          width: "200px",
        }}
      >
        <h4
          style={{
            margin: "0 0 10px 0",
            fontSize: "18px",
            textAlign: "center",
          }}
        >
          Values
        </h4>
        <ul
          style={{ margin: 0, padding: 0, listStyle: "none", fontSize: "14px" }}
        >
          {savedValues.map((value, index) => (
            <li key={index} style={{ marginBottom: "5px", textAlign: "left" }}>
              {value}
            </li>
          ))}
        </ul>
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <img
          src={treeImage}
          alt="Christmas Tree"
          style={{
            width: "800px",
            height: "auto",
          }}
        />
      </div>

      {isVisible &&
        positions.map((ball) => (
          <Ball
            key={ball.id}
            position={ball.position}
            color={ball.color}
            value={ball.value}
          />
        ))}

      {isVisible &&
        connections.map((connection, index) => (
          <ConnectionLine
            key={index}
            start={connection.start}
            end={connection.end}
            isLightOn={isLightOn}
            lightOnImage={lightOn}
            lightOffImage={lightOff}
          />
        ))}

      {isVisible && (
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <BoxRow boxColors={boxColors} values={boxValues} />
        </div>
      )}
    </div>
  );
};

export default ChristmasTree;
