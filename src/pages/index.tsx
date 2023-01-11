
// Theme
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/global'
import { defaultTheme } from '../styles/theme/default'

export default function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
    </ThemeProvider>
  )
}
