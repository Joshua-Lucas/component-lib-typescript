import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Theme } from './Utills'
import FormExample from './Components/FormExample'

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <FormExample />
    </ThemeProvider>
  )
}

export default App
