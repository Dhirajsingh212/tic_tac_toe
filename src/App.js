import React from "react";
import Board from "./component/Board";
import "./App.css";

export default function App() {
  return (
    <div className="app container">
      <div id="app_winner" className="app_winner"></div>
      <Board />
      <button
        onClick={() => window.location.reload(false)}
        className="app_button"
      >
        Reset
      </button>
    </div>
  );
}
