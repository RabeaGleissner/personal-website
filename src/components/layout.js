import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "./layout.scss"

const Layout = ({ children, isHome }) => {
  return (
    <>
      <div className="wrapper">
        <main className="content">
          { !isHome && <nav className="home-link"><Link to="/">Home</Link></nav> }
          {children}
        </main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isHome: PropTypes.bool.isRequired,
}

Layout.defaultProps = {
  isHome: false,
}

export default Layout
