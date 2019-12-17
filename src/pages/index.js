import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Insta from "../components/insta"
import Image from "../components/image"
import SEO from "../components/seo"

import usePosts from "../hooks/usePosts"

const IndexPage = () => {
  const data = usePosts()

  return (
    <Layout>
      <SEO title="Home" />
      <div className="flex">
        <div className="mb-6 w-64">
          <Image />
        </div>
        <ul className="flex flex-col p-12">
          {data.map(post => {
            return (
              <div key={post.slug} className="flex mx-0 my-4">
                <Img
                  className="w-24 h-24 mr-12"
                  fluid={post.image.childImageSharp.fluid}
                  alt={post.title}
                />
                <Link
                  to={`/${post.slug}`}
                  className="text-purple-800 mb-2 text-3xl font-bold"
                >
                  {post.title}
                </Link>
              </div>
            )
          })}
        </ul>
      </div>
      <div>
        <Insta />
      </div>
    </Layout>
  )
}

export default IndexPage
