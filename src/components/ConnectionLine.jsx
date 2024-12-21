import React from "react";

const ConnectionLine = ({
  start,
  end,
  isLightOn,
  lightOnImage,
  lightOffImage,
}) => {
  // 선 길이 및 각도 계산
  const calculateLine = (start, end) => {
    const startX = parseFloat(start.left.replace("%", ""));
    const startY = parseFloat(start.top.replace("%", ""));
    const endX = parseFloat(end.left.replace("%", "")) - 1.5;
    const endY = parseFloat(end.top.replace("%", "") - 3);

    const dx = endX - startX;
    const dy = endY - startY;
    const length = Math.sqrt(dx * dx + dy * dy); // 선의 길이
    const angle = (Math.atan2(dy, dx) * 180) / Math.PI; // 선의 각도
    return { length, angle };
  };

  const { length, angle } = calculateLine(start, end);

  return (
    <div
      style={{
        position: "absolute",
        top: `calc(${start.top})`, // 선의 중심 보정 (굵기의 절반만큼 위로 이동)
        left: `calc(${start.left})`, // 선의 중심 보정
        width: `calc(${length}% + 2vw)`, // 길이를 화면 크기 비율에 맞게 설정
        height: "50px", // 선의 굵기
        transform: `rotate(${angle}deg)`,
        transformOrigin: "0 50%", // 시작점을 기준으로 회전
        zIndex: 0, // 공 뒤로 배치
      }}
    >
      <img
        src={isLightOn ? lightOnImage : lightOffImage}
        alt="Connection Light"
        style={{
          width: "60%",
          height: "60%",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default ConnectionLine;
