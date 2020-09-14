import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "assets/css/style.css";

import HomePage from "pages/HomePage";

export default function App() {
  return (
    <Router>
      <HomePage />
    </Router>
  );
}
