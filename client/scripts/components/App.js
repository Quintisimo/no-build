import { html, useState, useEffect, useCallback, css, cx } from '../imports.js'

const center = css`
  text-align: center;
  font-size: 40px;
`

const red = css`
  color: red;
`

const grid = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 40px;

  & > button {
    outline: none;
    border: none;
    background: orangered;
    color: white;
    border-radius: 5px;
    font-size: 30px;
  }
`

export default function App() {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [start, setStart] = useState(false)

  const reset = useCallback(() => {
    setStart(false)
    setSeconds(0)
    setMinutes(0)
  }, [])

  useEffect(() => {
    let interval = null
    if (start) {
      interval = setInterval(() => {
        if (seconds < 60) {
          setSeconds((prev) => prev + 1)
        } else {
          setMinutes((prev) => prev + 1)
          setSeconds(0)
        }
      }, 1000)
    }
    return () => {
      if (interval !== null) {
        clearInterval(interval)
      }
    }
  }, [seconds, start])

  return html`<div>
    <p class=${cx({ [center]: true, [red]: start })}>
      Timer${' '}
      ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}
    </p>

    <div class=${grid}>
      <button onClick=${() => setStart((prev) => !prev)}>
        ${start ? 'Stop' : 'Start'}
      </button>
      <button onClick=${reset}>Reset</button>
    </div>
  </div>`
}
