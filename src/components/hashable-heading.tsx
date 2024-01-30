import kebab from 'lodash.kebabcase'
import React, { useState } from 'react'
import { Themed } from '@theme-ui/mdx'

type Series = 1 | 2 | 3 | 4 | 5 | 6
type Headings = `h${Series}`

interface Props extends React.ComponentProps<Headings> {
  children: string
}

const HashableHeading =
  (As: Headings) =>
  ({ children, ...props }: Props) => {
    const [showLink, setShowLink] = useState(false)

    return (
      <As
        id={kebab(children)}
        onMouseEnter={() => setShowLink(true)}
        onMouseLeave={() => setShowLink(false)}
        {...props}
      >
        {children}
        <Themed.a
          color="primary"
          style={{
            visibility: showLink ? 'visible' : 'hidden',
            marginLeft: '0.5rem',
          }}
          aria-describedby={kebab(children)}
          href={`#${kebab(children)}`}
        >
          #
        </Themed.a>
      </As>
    )
  }

export default HashableHeading
