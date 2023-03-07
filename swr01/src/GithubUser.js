import React from "react";
import useGithubUser from "./useGithubUser";

export function GithubUser(props) {
  const { user, error, loading } = useGithubUser(props.username);


  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error</h1>}
      {user && (
        <div>
          <h2>
            {user.login} - {user.id}
          </h2>
        </div>
      )}
    </div>
  );
}