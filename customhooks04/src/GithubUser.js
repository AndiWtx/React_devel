import React from "react";
import { useGithubUser } from "./useGithubUser";

export function GithubUser({ username }) {
  const { user, error, loading, fetchUser } = useGithubUser(username);

  function handleGetUserData() {
    fetchUser(username)
  }

  return (
    <div>
      <button onClick={handleGetUserData}>Load user data</button>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error</h1>}
      {user && <h3>{user.login}</h3>}

    </div>
  )
}