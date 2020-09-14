import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import "assets/css/style.css";

import HomePage from "pages/HomePage";

export default function App() {
  AOS.init();
  return (
    <Router>
      <HomePage />
    </Router>
  );
}
