import React from "react";

const Ball = ({ position, color, value }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: position.top,
        left: position.left,
        transform: "translate(-50%, -50%)",
        width: "50px",
        height: "50px",
        zIndex: 1,
      }}
    >
      {/* 공 이미지 */}
      <img
        src={color}
        alt="Ball Image"
        style={{
          width: "100%",
          height: "100%",
        }}
      />

      {/* 공 안에 표시할 값 */}
      <span
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: "16px",
          fontWeight: "bold",
          textAlign: "center",
          zIndex: 2,
          lineHeight: "1.2", // 여러 줄 텍스트 간격 조정
        }}
      >
        {value}
      </span>
    </div>
  );
};

export default Ball;
