import * as React from 'react'
import { Grid } from 'theme-ui'
import OriginalListing from '@lekoarts/gatsby-theme-minimal-blog/src/components/listing'

import { IPost } from '~/types'

import BlogListItem from './blog-list-item'

interface Props extends React.ComponentProps<typeof OriginalListing> {
  posts: IPost[]
}

export default function Listing({ posts, showTags, className }: Props) {
  return (
    <section sx={{ mb: [5, 6, 7] }} className={className}>
      <Grid
        gap={4}
        columns={[1, 2, null, 3]}
        sx={{
          justifyItems: ['center', null, null, 'stretch'],
        }}
      >
        {posts.map(post => (
          <BlogListItem key={post.slug} post={post} showTags={showTags} />
        ))}
      </Grid>
    </section>
  )
}
