import { graphql } from 'gatsby'
import BlogComponent, {
  Head,
} from '@lekoarts/gatsby-theme-minimal-blog-core/src/components/blog'

export default BlogComponent

export { Head }

export const query = graphql`
  query ($formatString: String!) {
    allPost(sort: { date: DESC }) {
      nodes {
        slug
        title
        date(formatString: $formatString)
        excerpt
        timeToRead
        description
        tags {
          name
          slug
        }

        banner {
          childImageSharp {
            resize(width: 300, height: 200, quality: 90, cropFocus: CENTER) {
              src
              width
              height
            }
          }
        }
      }
    }
  }
`
