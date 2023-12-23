import { graphql } from 'gatsby'
import BlogComponent, {
  Head,
} from '@lekoarts/gatsby-theme-minimal-blog-core/src/components/blog'

export default BlogComponent

export { Head }

export const query = graphql`
  {
    allPost(sort: { date: DESC }) {
      nodes {
        slug
        title
        date(formatString: "YYYY.MM.DD")
        excerpt
        timeToRead
        description
        tags {
          name
          slug
        }

        banner {
          childImageSharp {
            resize(width: 300, height: 200, quality: 90) {
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
