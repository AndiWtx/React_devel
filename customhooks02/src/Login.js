import React from "react";
import { CustomControlledForm } from "./customControlledForm";

export function Login(props) {
  const { username, password, handleInputChange } = CustomControlledForm();

  return (
    <form>
      <input
        type="text"
        name="username"
        value={username}
        onChange={(e) => handleInputChange(e, "username")}
      />

      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => handleInputChange(e, "password")}
      />

      <button
        type="submit"
        disabled={!(username && password)}
        onClick={props.onLogin}
      >
        Login
      </button>
    </form>
  );
}