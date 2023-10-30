import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"


const root = ReactDOM.createRoot(document.getElementById("root"));
const tick = () => {
  root.render(
    <div className="container">
    <div className="card">
      <div className="card--header" />
      <img
        className="avatar"
        src="logo192.png"
        alt="avatar"
      />
      <div className="card--body">
        <div>
          <p className="text-header">Trần Vĩnh An </p>
          <p className="text-sub">
           HEHEHEHE
          </p>
          <button className="btn third">FOLLOW</button>
        </div>
      </div>
    </div>
  </div>
  );
};

setInterval(tick, 1000);