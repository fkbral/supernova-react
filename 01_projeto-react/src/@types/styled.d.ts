import type { DefaultTheme } from 'styled-components'
import type { AppTheme } from '../application/theme'

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}
