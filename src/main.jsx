import React from 'react'
import ReactDOM from 'react-dom/client'


import GlobalStyle from './assets/theme/global'
import { ThemeProvider } from 'styled-components'
import theme from './assets/theme/theme'

import { Routes } from './routes'
import { AuthProvider } from '../src/hooks/auth'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)