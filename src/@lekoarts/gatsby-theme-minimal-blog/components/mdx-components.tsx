import OriginalMdxComponents from '@lekoarts/gatsby-theme-minimal-blog/src/components/mdx-components'

import HashableHeading from '../../../components/hashable-heading'

const MdxComponents = {
  ...OriginalMdxComponents,
  h1: HashableHeading('h1'),
  h2: HashableHeading('h2'),
  h3: HashableHeading('h3'),
  h4: HashableHeading('h4'),
  h5: HashableHeading('h5'),
  h6: HashableHeading('h6'),
}

export default MdxComponents
