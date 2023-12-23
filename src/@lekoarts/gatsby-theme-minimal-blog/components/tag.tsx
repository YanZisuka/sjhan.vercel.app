import { HeadFC, Link } from 'gatsby'
import * as React from 'react'
import { Flex, Heading } from 'theme-ui'
import { Box } from 'theme-ui'
import Layout from '@lekoarts/gatsby-theme-minimal-blog/src/components/layout'
import Seo from '@lekoarts/gatsby-theme-minimal-blog/src/components/seo'
import OriginalTag from '@lekoarts/gatsby-theme-minimal-blog/src/components/tag'
import useMinimalBlogConfig from '@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config'
import replaceSlashes from '@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes'

import Listing from './listing'

interface Props extends React.ComponentProps<typeof OriginalTag> {}

export default function Tag({ posts, pageContext }: Props) {
  const { tagsPath, basePath } = useMinimalBlogConfig()

  return (
    <Layout>
      <Flex
        sx={{
          alignItems: `center`,
          justifyContent: `space-between`,
          flexFlow: `wrap`,
        }}
      >
        <Heading as="h1" variant="styles.h1" sx={{ marginY: 2 }}>
          {pageContext.name}
        </Heading>
        <Link
          sx={t => ({ ...t.styles?.a, variant: `links.secondary`, marginY: 2 })}
          to={replaceSlashes(`/${basePath}/${tagsPath}`)}
        >
          View all tags
        </Link>
      </Flex>
      <Box sx={{ mt: ['2rem', '4rem'] }}>
        <Listing posts={posts} sx={{ mt: [4, 5] }} />
      </Box>
    </Layout>
  )
}

export const Head: HeadFC<unknown, { name: string }> = ({ pageContext }) => (
  <Seo title={`Tag: ${pageContext.name}`} />
)
