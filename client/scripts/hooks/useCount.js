import { useState } from '../imports.js'

export default function useCount() {
  const [count, setCount] = useState(0)

  return {
    count,
    increment() {
      setCount((prev) => prev + 1)
    },
  }
}
