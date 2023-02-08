import React from "react";
import "./App.css";
import Login from "./Components/Login";
import { Route, Routes } from "react-router-dom";
import PrivateOutlet from "./Components/PrivateOutlet";
import Home from "./Components/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/*" element={<PrivateOutlet />}>
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
