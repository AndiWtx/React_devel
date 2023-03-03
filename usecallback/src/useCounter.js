import { useState, useCallback } from "react";

export function useCounter({ initialValue = 0 }) {
  const [count, setCount] = useState(initialValue);

  const incrementCount = useCallback(
    () => setCount((value) => value + 1),
    []
  );

  const decrementCount = useCallback(
    () => setCount((value) => value - 1),
    []
  );

  const resetCount = useCallback(
    () => setCount(initialValue),
    [initialValue]
  );

  return {
    count,
    incrementCount,
    decrementCount,
    resetCount,
  };
}