import { useState } from "react";

export function useGithubUser() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUser = (username) => {
    setLoading(true);

    fetch(`https://api.github.com/users/${username}`)
      .then((response) =>
        response.status !== 200 ? setError(new Error()) : response.json()
      )
      .then((json) => setUser(json))
      .catch((error) => setError(new Error(error)))
      .finally(() => setLoading(true));
  };

  return {
    fetchUser,
    user,
    error,
    loading,
  };
}