/// <reference lib="dom" />
import { render, html, injectGlobal } from "./imports.ts";
import App from "./components/App.ts";

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
`;

// @ts-expect-error: react, htm type mismatch
render(html`<${App} />`, document.body);
