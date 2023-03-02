import React, { useState } from 'react';

export function HandleButtonClick({ initialValue = 0 }) {
  const [counter, setCounter] = useState(initialValue)

  function handleCounterIncrement() {
    setCounter(c => c + 1)

  }



  return (
    <>
      <button onClick={handleCounterIncrement}>
        Increment
      </button>
      <h2>Count: {counter}</h2>
    </>
  )


}

