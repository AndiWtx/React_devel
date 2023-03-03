import React from "react";
import { useState } from "react";
import { GithubUser } from "./GithubUser";

export default function GithubUserList() {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);

  const handleUserAddition = () => {
    setUsers([...users, username]);
    setUsername("");
  };

  return (
    <div>
      <input
        type="text"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleUserAddition}>Add user</button>

      {users.map((user) => (
        <GithubUser username={user} />
      ))}
    </div>
  );
}