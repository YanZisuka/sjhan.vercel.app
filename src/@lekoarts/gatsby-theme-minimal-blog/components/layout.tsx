import * as React from 'react'
import OriginalLayout from '@lekoarts/gatsby-theme-minimal-blog/src/components/layout'
import { Analytics } from '@vercel/analytics/react'

interface Props extends React.ComponentProps<typeof OriginalLayout> {}

export default function Layout(props: Props) {
  return (
    <>
      <OriginalLayout {...props} />
      <Analytics />
    </>
  )
}
