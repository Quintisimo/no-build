import { render, html, injectGlobal } from './imports.js'
import App from './components/App.js'

injectGlobal`
  * {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  html, body {
    height: 100%;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

render(html`<${App} />`, document.body)
