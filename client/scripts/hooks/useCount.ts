import { useState } from "../imports.ts";

export default function useCount() {
  const [count, setCount] = useState(0);

  return {
    count,
    increment() {
      setCount((prev) => prev + 2);
    },
  };
}
