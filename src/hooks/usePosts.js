import { graphql, useStaticQuery } from "gatsby"

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              title
              slug
              date(formatString: "MM-DD-YYYY")
              image {
                relativePath
                childImageSharp {
                  fluid(maxWidth: 300, maxHeight: 300) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return data.allMdx.edges
    .map(({ node: { frontmatter: { title, slug, date, ...otherProps } } }) => ({
      title,
      slug,
      date,
      ...otherProps,
    }))
    .filter(posts => posts.title)
}

export default usePosts
