import React, { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0)


  setInterval(() => {
    setCount(
      count + 1
    )
  }, 1000)





  return <h1>Count: {count}</h1>


}
