import { graphql } from 'gatsby'
import HomepageComponent, {
  Head,
} from '@lekoarts/gatsby-theme-minimal-blog-core/src/components/homepage'

export default HomepageComponent

export { Head }

export const query = graphql`
  query ($formatString: String!) {
    allPost(sort: { date: DESC }, limit: 6) {
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
