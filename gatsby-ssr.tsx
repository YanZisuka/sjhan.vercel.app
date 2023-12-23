import { withPrefix } from 'gatsby'
import * as React from 'react'

const noFlashDark = `(function () {
  try {
    var hasLocalStorage = localStorage.getItem('theme-ui-color-mode');

    if (
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      document.querySelector('html').setAttribute('data-theme', 'dark')
      if (!hasLocalStorage) {
        document.documentElement.classList.add('theme-ui-dark')
        window.addEventListener('load', () => {
          document.documentElement.classList.remove('theme-ui-dark')
        });
      }
    }
  } catch (err) {}
})();`

export const onRenderBody = ({
  setPreBodyComponents,
}: {
  setPreBodyComponents: (components: React.ReactNode[]) => void
}) => {
  setPreBodyComponents([
    <script
      key="theme-ui-no-flash-dark"
      dangerouslySetInnerHTML={{
        __html: noFlashDark,
      }}
    />,
  ])
}

const fontUrl = `https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css`
const codeFontItalicUrl = `${withPrefix('fonts/MonaspaceArgon-Italic.woff')}`
const codeFontNormalUrl = `${withPrefix('fonts/MonaspaceArgon-Regular.woff')}`
const fontMl = `@font-face{font-family:'Monaspace Argon';font-style:normal;src:url(${codeFontNormalUrl}) format('woff');}@font-face{font-family:'Monaspace Argon';font-style:italic;src:url(${codeFontItalicUrl}) format('woff');}`

const strikeThroughCss = `.strikeThrough::after{content:"";position:absolute;height:0.15em;background:var(--theme-ui-colors-danger);margin:auto;margin-top:0.65em;-webkit-transform:rotate(-3deg);-moz-transform:rotate(-3deg);-ms-transform:rotate(-3deg);transform:rotate(-3deg);inset:0;}`

export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}: {
  getHeadComponents: () => React.ReactNode[]
  replaceHeadComponents: (components: React.ReactNode[]) => void
}) => {
  const components = [
    <link
      key="font-pretendard"
      rel="stylesheet"
      href={fontUrl}
      as="style"
      crossOrigin="anonymous"
    />,
    <link
      key="font-monaspace-argon"
      rel="preload"
      href={codeFontNormalUrl}
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
    />,
    <link
      key="font-monaspace-argon-italic"
      rel="preload"
      href={codeFontItalicUrl}
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
    />,
    <style
      key="font-face.monaspace-argon"
      dangerouslySetInnerHTML={{
        __html: fontMl,
      }}
    />,
    <style
      key="strike-through"
      dangerouslySetInnerHTML={{
        __html: strikeThroughCss,
      }}
    />,
    ...getHeadComponents(),
  ]

  replaceHeadComponents(components)
}
