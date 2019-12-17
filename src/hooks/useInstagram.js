import { graphql, useStaticQuery } from "gatsby"

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allInstaNode {
        nodes {
          id
          caption
          likes
          comments
        }
      }
    }
  `)

  return data.allInstaNode.nodes
}

export default usePosts
