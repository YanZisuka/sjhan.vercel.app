import { merge } from 'theme-ui'
import baseTheme from '@lekoarts/gatsby-theme-minimal-blog/src/gatsby-plugin-theme-ui'

const theme = merge(baseTheme, {
  fontSizes: [
    '0.875rem',
    '1rem',
    '1.125rem',
    '1.25rem',
    '1.5rem',
    '1.875rem',
    '2.25rem',
    '3rem',
    '4rem',
    '4.5rem',
  ],
  fonts: {
    body: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
  },
  text: {
    default: {
      color: 'text',
      fontSize: [1, 1, 2],
    },
  },
  badges: {
    outline: {
      color: 'primary',
      bg: 'transparent',
      borderRadius: '8px',
      paddingY: 2,
      boxShadow: 'inset 0 0 0 1px',
    },
  },
  space: [
    baseTheme.space![0],
    baseTheme.space![1],
    baseTheme.space![2],
    baseTheme.space![3],
    baseTheme.space![4],
    baseTheme.space![5],
    baseTheme.space![6],
    baseTheme.space![6],
    baseTheme.space![6],
  ],
  useColorSchemeMediaQuery: true,
  alerts: {
    highlight: {
      color: 'background',
      bg: 'primary',
    },
    primary: {
      color: 'background',
    },
  },
  colors: {
    backgroundSecondary: 'var(--theme-ui-colors-gray-2)',
    backgroundTertiary: 'var(--theme-ui-colors-gray-3)',
    twitterBlue: '#1d9bf0',
    twitterPollBg: 'rgb(207, 217, 222)',
    twitterPollBgWinner: 'rgba(29, 155, 240, 0.58)',
    primary: '#3536e5',
    danger: 'var(--theme-ui-colors-red-6)',
    warning: 'var(--theme-ui-colors-yellow-7)',
    modes: {
      dark: {
        primary: '#19c9ff',
        danger: 'var(--theme-ui-colors-red-7)',
        twitterPollBg: 'rgb(51, 54, 57)',
        background: '#18181c',
        backgroundSecondary: 'var(--theme-ui-colors-gray-8)',
        backgroundTertiary: 'var(--theme-ui-colors-gray-7)',
        warning: 'var(--theme-ui-colors-yellow-6)',
      },
    },
  },
  styles: {
    a: {
      fontWeight: 500,
      textDecoration: 'none',
      ':hover': {
        textDecoration: 'underline',
      },
    },
    h1: {
      overflowWrap: 'break-word',
    },
    h2: {
      overflowWrap: 'break-word',
    },
    h3: {
      overflowWrap: 'break-word',
    },
    h4: {
      overflowWrap: 'break-word',
    },
    h5: {
      overflowWrap: 'break-word',
    },
    h6: {
      overflowWrap: 'break-word',
    },
  },
})

export default theme
