import { useEffect, useState } from 'react'

export function GithubUser({ username }) {
  const [data, setData] = useState(null)

  useEffect(() => {


    fetch(`https://api.github.com/users/${username}`)
      .then(response => {

        return response.json()
      })
      .then(json => {
        console.log(json)
        setData(json)
      })

  }, [username])

  return (
    <div>
      {data && <h3>{data.login}</h3>}
      {/* I used the login because I don't have a name displayed for this username in console :) */}

    </div>
  )
}