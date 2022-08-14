import React from "react";
//Components and Pages
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";


function App() {
  return (
    <div className="App">

      <GlobalStyles />
      <Nav/>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/games/:id" element={<Home />}></Route>
      </Routes>

    </div>
  );
}

export default App;
