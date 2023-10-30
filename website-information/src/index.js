import React from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));
const tick = () => {
  root.render(
    <div>
      <h1>Tạo Element thể hiện thông tin của Trình duyệt bạn đang sử dụng :</h1>
      <h3>Browser's details: {navigator.userAgent}</h3>    
    </div>
  );
};

setInterval(tick, 1000);