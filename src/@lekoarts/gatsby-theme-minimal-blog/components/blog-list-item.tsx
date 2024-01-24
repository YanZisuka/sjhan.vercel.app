import { Link } from 'gatsby'
import * as React from 'react'
import { Box, Image } from 'theme-ui'
import OriginalBlogListItem from '@lekoarts/gatsby-theme-minimal-blog/src/components/blog-list-item'

import { IPost } from '~/types'

interface Props extends React.ComponentProps<typeof OriginalBlogListItem> {
  post: IPost
}

export default function BlogListItem({ post, showTags }: Props) {
  return (
    <Box
      sx={{
        maxWidth: '320px',
        borderRadius: '12px',
        padding: '8px',
        '@media (prefers-reduced-motion: no-preference)': {
          transition:
            'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1),box-shadow 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
          '&:hover': {
            transform: 'translate3d(0, -8px, 0)',
          },
        },
      }}
    >
      {post.banner && (
        <Link
          to={post.slug}
          sx={t => ({
            ...t.styles?.a,
          })}
        >
          <Image
            src={post.banner?.childImageSharp.resize.src}
            loading="lazy"
            sx={{ borderRadius: '6px' }}
            width={post.banner?.childImageSharp.resize.width}
            height={post.banner?.childImageSharp.resize.height}
            alt={post.title}
          />
        </Link>
      )}
      <OriginalBlogListItem post={post} showTags={showTags} />
    </Box>
  )
}
