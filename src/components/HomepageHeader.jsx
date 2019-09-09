import React from "react"
import { Link } from "gatsby"

import "./homepage-header.scss"

const HomepageHeader = () => {
  return (
    <header className="homepage-header">
      <section className="homepage-header-about">
        <h3>The virtual home of</h3>
        <h1 className="homepage-header-title">Rabea Gleissner</h1>
        <p>A place to share what I've been learning and making.</p>
        <nav className="homepage-header-nav">
          <ul>
            <li>
              <Link to="/blog-index/">Blog posts</Link>
            </li>
            <li>
              <Link to="/til-index/">Today I learnt</Link>
            </li>
            <li>
              <Link to="/about-me/">About me</Link>
            </li>
          </ul>
        </nav>
        <section className="homepage-header-social-links">
          <p>You can also find me here:</p>
          <ul>
            <li><a href="https://github.com/rabeagleissner">Github</a></li>
            <li><a href="https://twitter.com/aebar">Twitter</a></li>
            <li><a href="https://linkedin.com/in/rabeagleissner/">LinkedIn</a></li>
          </ul>
        </section>
      </section>
    </header>
  )
}

export default HomepageHeader;
