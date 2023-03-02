import React, { useState } from 'react'


export function Login() {

  const [data, setData] = useState({
    username: '',
    password: '',
    remember: false,
  })

  function handleInputChange(event) {
    const { name, type, value, checked } = event.target;
    setData(data => {
      return {
        ...data,
        [name]: type === 'checkbox' ? checked : value
      }
    })
  };

  console.log(data)



  return (
    <div>
      <h1>Login</h1>
      <input
        type='text'
        name='username'
        value={data.username}
        onChange={handleInputChange}

      />
      <input
        type='password'
        name='password'
        value={data.password}
        onChange={handleInputChange}
      />
      <input
        type='checkbox'
        name='remember'
        checked={data.remember}
        onChange={handleInputChange}
      />
    </div>
  )
}
