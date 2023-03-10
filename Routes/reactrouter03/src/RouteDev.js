import React from "react";
import { Routes, Route } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { ShowGithubUser } from "./ShowGithubUser";


export function RouteDev() {

  return (
    <Routes>
      <Route path="/" element={<Welcome name="John" />} />
      <Route
        path="/counter"
        element={
          <Counter />
        }
      />
      <Route path="/users/:username" element={<ShowGithubUser />} />
    </Routes>
  );

}