import { ThemeProvider } from 'styled-components'
import { Theme } from '../src/Utiles/Theme/Theme.ts'

export const context = [
  {
    icon: 'box',
    title: 'Themes',
    components: [ThemeProvider],
    params: [
      {
        name: 'Default Theme',
        props: { theme: Theme, default: true }
      }
    ],
    options: {
      deep: true,
      disable: false,
      cancelable: false
    }
  }
]
