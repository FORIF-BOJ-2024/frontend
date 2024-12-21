import React, { useEffect } from "react";

const Snowfall = () => {
  useEffect(() => {
    // 눈 입자 속성 설정
    const snowElements = document.querySelectorAll(".snow");
    snowElements.forEach((snow) => {
      const randomSize = Math.random() * 5 + 5; // 2px ~ 5px 사이 크기
      const randomGray = Math.floor(Math.random() * 50 + 200); // 흰색(200)~연한 회색(250)

      snow.style.setProperty("--x", Math.random()); // 가로 위치 랜덤
      snow.style.setProperty("--duration", `${Math.random() * 5 + 5}s`); // 속도 랜덤
      snow.style.setProperty("--size", `${randomSize}px`); // 크기 랜덤
      snow.style.setProperty(
        "--color",
        `rgb(${randomGray}, ${randomGray}, ${randomGray})`
      ); // 흰색~연한 회색 랜덤
    });
  }, []);

  return (
    <div className="snow-container">
      {Array.from({ length: 100 }).map((_, index) => (
        <div key={index} className="snow"></div>
      ))}
    </div>
  );
};

export default Snowfall;
