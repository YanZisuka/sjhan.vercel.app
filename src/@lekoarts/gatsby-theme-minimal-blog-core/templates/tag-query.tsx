import { graphql } from 'gatsby'
import TagComponent, {
  Head,
} from '@lekoarts/gatsby-theme-minimal-blog-core/src/components/tag'

export default TagComponent

export { Head }

export const query = graphql`
  query ($slug: String!, $formatString: String!) {
    allPost(
      sort: { date: DESC }
      filter: { tags: { elemMatch: { slug: { eq: $slug } } } }
    ) {
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
