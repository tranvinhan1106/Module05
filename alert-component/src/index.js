import React from "react";
import ReactDOM from "react-dom/client";
import Alert from "./components/Alert";


const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(
    <>
    <Alert text="Cảnh báo ! Tài nguyên bạn vừa truy cập không tồn tại ." />
    </>
  );