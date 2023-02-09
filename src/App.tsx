import "./App.css";
import Login from "./Components/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { useState } from "react";

function App() {
  const [data, setData] = useState("");

  return (
    <div>
      <Navbar data={data} />
      <Routes>
        <Route path="/" element={<Login onUpdateData={setData} />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
