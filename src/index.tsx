import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from 'app/App'
import './style.scss'
import { BrowserRouter } from 'react-router-dom'
import './shared/config/i18n'

const root_element: HTMLDivElement = document.createElement('div')
root_element.id = 'root'
document.body.append(root_element)

const root = createRoot(root_element)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
