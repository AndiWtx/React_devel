import React from "react";
import { Routes, Route } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Counter } from "./counter/Counter";


export class RouteDev extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Welcome name="John" />} />
        <Route
          path="/counter"
          element={<Counter />}
        />
      </Routes>
    );
  }
}