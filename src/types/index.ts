export interface IAllPost {
  nodes: IPost[]
}

export interface IPost {
  slug: string
  title: string
  date: string
  excerpt: string
  timeToRead?: number
  description: string
  tags?: IPostTag[]
  banner?: IPostBanner
}

export interface IPostTag {
  name: string
  slug: string
}

export interface IPostBanner {
  childImageSharp: {
    resize: {
      src: string
      width?: number
      height?: number
    }
  }
}
