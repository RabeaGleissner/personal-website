import React from "react"
import PropTypes from "prop-types"

import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <div className="wrapper">
        <main className="content">{children}</main>
        <footer>
          © {new Date().getFullYear()},
          {` `}
          <a href="https://github.com/RabeaGleissner/gatsby-blog">View source</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
