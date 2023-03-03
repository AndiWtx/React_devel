import React, { useState, useEffect } from 'react';

export function HandleButtonClick({ initialValue = 0 }) {
  const [counter, setCounter] = useState(initialValue)

  useEffect(() => {
    console.log('i have mounted')

    return () => {
      console.log("I'm about to be unmounted")
    }

  }, [])

  useEffect(() => {

    console.log(`Counter is ${counter}`)

  }, [counter])



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

