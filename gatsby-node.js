const path = require(`path`)
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic(`failed to create posts ${result.errors}`)
  }

  const blogPostTemplate = path.resolve("./src/templates/blog-post.js")

  const posts = result.data.allMdx.nodes

  posts.forEach(node => {
    if (node.frontmatter.slug) {
      actions.createPage({
        path: `${node.frontmatter.slug}`,
        component: blogPostTemplate,
        context: {
          title: node.frontmatter.title,
          slug: node.frontmatter.slug,
        },
      })
    }
  })
}
