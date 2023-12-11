import { themes } from 'prism-react-renderer'
import { themeWithCssVariables } from '@lekoarts/gatsby-theme-minimal-blog/src/utils/prism-utils'

const { nightOwl } = themes
const { theme: lightTheme, variables: lightThemeVars } =
  themeWithCssVariables(nightOwl)
const { theme: darkTheme, variables: darkThemeVars } =
  themeWithCssVariables(nightOwl)

export { lightTheme, darkTheme, lightThemeVars, darkThemeVars }
