import * as React from 'react'
import OriginalLayout from '@lekoarts/gatsby-theme-minimal-blog/src/components/layout'
import { useLocation } from '@reach/router'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'

interface Props extends React.ComponentProps<typeof OriginalLayout> {}

export default function Layout(props: Props) {
  return (
    <>
      <OriginalLayout {...props} />
      <Analytics />
      <Insights />
    </>
  )
}

function Insights() {
  const location = useLocation()

  return <SpeedInsights route={location.pathname} />
}
