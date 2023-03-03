import { useState } from "react";

export function useCounter({ initialValue = 0 }) {
  const [count, setCount] = useState(initialValue);

  const incrementCount = () => setCount((value) => value + 1);
  const decrementCount = () => setCount((value) => value - 1);
  const resetCount = () => setCount(initialValue);

  return {
    count,
    incrementCount,
    decrementCount,
    resetCount,
  };
}