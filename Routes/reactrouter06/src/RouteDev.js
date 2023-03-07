import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { ShowGithubUser } from "./ShowGithubUser";
import { GithubUserList } from "./GithubUserList";


export function RouteDev() {

  return (
    <div>
      <div>
        <Link to="/">Home</Link> | {" "}
        <Link to="/counter">Counter</Link> | {" "}
        <Link to="/users/AndiWtx">Github Account</Link>
      </div>

      <Routes>
        <Route path="/@" element={<h2>404 Not Found</h2>} />
        <Route path="/" element={<Welcome name="Andrei" />} />
        <Route path="counter" element={<Counter />} />
        <Route path="/users" element={<GithubUserList />}>
          <Route path=":username" element={<ShowGithubUser />} />
        </Route>
      </Routes>
    </div>
  );

}