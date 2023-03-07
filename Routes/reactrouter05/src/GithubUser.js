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
      {data && <h3>{data.login}-{data.id}</h3>}

    </div>
  )
}
