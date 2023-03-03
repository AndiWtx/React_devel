import { useState, useEffect } from "react";

export default function useGithubUser(username) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then(json => {
        setUser(json)
        console.log(json)
      })

  }, [username]);

  return {
    user,
  };
}