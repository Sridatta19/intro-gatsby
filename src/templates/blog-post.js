import React from "react"
import { Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MM-DD-YYYY")
      }
      body
    }
  }
`

const PostTemplate = ({ data: { mdx: post } }) => {
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <div className="flex mb-4">
        <div className="w-1/4"></div>
        <div
          className="w-3/5"
          style={{ display: "grid", gridGap: "20px 50px" }}
        >
          <h1 className="text-4xl font-semibold mb-8">
            {post.frontmatter.title}
          </h1>
          <MDXRenderer>{post.body}</MDXRenderer>
          <p className="text-sm text-gray-600 my-12">
            Posted on {post.frontmatter.date}
          </p>
          <Link className="text-purple-800" to="/">
            Return to Home Page
          </Link>
        </div>
        <div className="w-2/5"></div>
      </div>
    </Layout>
  )
}

export default PostTemplate
