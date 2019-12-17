import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1 className="mb-6">Hi from the second page</h1>
    <p className="mb-6">Welcome to page 2</p>
    <Link className="mb-6 text-purple-800" to="/">
      Go back to the homepage
    </Link>
  </Layout>
)

export default SecondPage
