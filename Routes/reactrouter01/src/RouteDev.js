import React from "react";
import { Routes, Route } from "react-router-dom";
import { Welcome } from "./Welcome.js";

export class RouteDev extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Welcome name="John" />} />
      </Routes>
    );
  }
}