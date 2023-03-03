import React from 'react'
import useGithubUser from "./useGithubUser";

export function GithubUser(props) {
  const { user } = useGithubUser(props.username)


  return (
    <div>
      {user && <h3>{user.login}</h3>}
      {/* I used the login because I don't have a name displayed for this username in console :) */}

    </div>
  )
}