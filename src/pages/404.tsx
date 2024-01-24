import type { PageProps } from 'gatsby'
import * as React from 'react'
import Layout from '@lekoarts/gatsby-theme-minimal-blog/src/components/layout'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const NotFound = (_props: PageProps) => (
  <Layout>
    <h1>404 - Page Not Found</h1>
    <p>Unfortunately we couldn't find what you were looking for :(</p>
  </Layout>
)

export default NotFound
