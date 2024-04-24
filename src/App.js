import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import VenhaConhecer from "./pages/VenhaConhecer";
import Atrações from "./pages/Atrações"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/VenhaConhecer" element={<VenhaConhecer />} />
        <Route path="/atracoes" element={<Atrações />} />
      </Routes>
    </Router>
  );
};

export default App;
