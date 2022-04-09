import htm from 'https://cdn.skypack.dev/htm?dts'
import { createElement, useState, useEffect, useCallback } from 'https://cdn.skypack.dev/react?dts'
import { render } from 'https://cdn.skypack.dev/react-dom?dts'
import { css, injectGlobal, cx } from 'https://cdn.skypack.dev/@emotion/css?dts'

const html = htm.bind(createElement)

export { html, render, useState, useEffect, useCallback, css, injectGlobal, cx }
