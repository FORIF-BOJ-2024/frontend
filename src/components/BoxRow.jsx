import React, { useState, useEffect } from "react";

const BoxRow = ({ boxColors, values }) => {
  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    const initializeBoxes = () => {
      const boxWidth = 100; // 박스 크기 키움
      const boxSpacing = 90; // 박스 간 간격
      const totalWidth = values.length * boxSpacing; // 박스들의 총 가로 길이
      const startLeft = `calc(50% - ${totalWidth / 2}px)`; // 중앙 정렬 시작 위치
      const initialBoxes = [];

      for (let i = 0; i < values.length; i++) {
        const angle = Math.random() * 10 - 5; // -5도 ~ 5도 사이 기울기
        const color = boxColors[i % boxColors.length]; // 순서대로 색상 할당

        initialBoxes.push({
          id: i,
          left: `calc(${startLeft} + ${i * boxSpacing}px)`,
          rotation: angle,
          color: color,
          text: values[i], // 지정된 값을 텍스트로 표시
        });
      }

      setBoxes(initialBoxes);
    };

    initializeBoxes();
  }, [boxColors, values]); // values와 boxColors가 변경되면 다시 초기화

  return (
    <div>
      {boxes.map((box) => (
        <div
          key={box.id}
          style={{
            position: "absolute",
            bottom: "40px",
            left: box.left,
            transform: `rotate(${box.rotation}deg)`,
            width: "100px", // 크기 증가
            height: "100px", // 크기 증가
            zIndex: 1,
          }}
        >
          <img
            src={box.color}
            alt={`Box ${box.id}`}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
          <span
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              color: "white",
              fontWeight: "bold",
              fontSize: "22px", // 텍스트 크기 증가
              zIndex: 2,
            }}
          >
            {box.text}
          </span>
        </div>
      ))}
    </div>
  );
};

export default BoxRow;
