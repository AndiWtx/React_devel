import React from 'react';
import { useCounter } from './useCounter'

export function Counter({ initialValue = 0 }) {
  const { count, incrementCount, resetCount } = useCounter(initialValue)

  return (
    <div>
      <h2>Counter:{count}</h2>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  )
}



