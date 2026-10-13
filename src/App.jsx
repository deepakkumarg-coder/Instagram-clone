
import React from "react";
import "./App.css";
import SideBar from "./SideBar";
import Feed from "./Feed";
import Suggestion from "./Suggestion";

function App() {
  return (
    <div className="d-flex vh-100">

      <div className="w-20">
        <SideBar />
      </div>

      <div className="w-50 feed-container">
        <Feed />
      </div>

      <div className="w-30">
        <Suggestion />
      </div>

    </div>
  );
}

export default App;


