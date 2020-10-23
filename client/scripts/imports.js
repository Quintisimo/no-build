import htm from 'https://cdn.skypack.dev/htm'
import { render, h } from 'https://cdn.skypack.dev/preact'
import {
  useState,
  useEffect,
  useCallback,
} from 'https://cdn.skypack.dev/preact/hooks'
import { css, injectGlobal, cx } from 'https://cdn.skypack.dev/emotion'

const html = htm.bind(h)

export { html, render, useState, useEffect, useCallback, css, injectGlobal, cx }
