import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import {AktorList, AktorPage} from "./components/Aktor"


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AktorList />} />
          <Route path="/aktor/*" element={<AktorPage />} />
        </Routes>
      </BrowserRouter>
    );
}

export default App;
