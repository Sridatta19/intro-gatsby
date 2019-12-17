import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="mb-6 bg-purple-800">
    <div className="mx-auto my-0 max-w-4xl py-6 pr-4 pb-6">
      <h1 className="m-0">
        <Link to="/" className="text-white no-underline font-bold text-4xl">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
