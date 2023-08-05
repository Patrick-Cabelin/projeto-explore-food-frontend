import React from 'react'
import ReactDOM from 'react-dom/client'


import GlobalStyle from './assets/theme/global'
import { ThemeProvider } from 'styled-components'
import theme from './assets/theme/theme'

import { Routes } from './routes'
// import { Home } from '../src/assets/pages/Home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <ThemeProvider theme={theme}>
    <GlobalStyle/>
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
)