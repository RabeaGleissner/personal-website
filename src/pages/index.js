import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

const IndexPage = () => (
  <>
  <SEO title="Home" />
  <h3>The virtual home of</h3>
  <h1>Rabea Gleissner</h1>
  <p>A place to share what I've been learning and making.</p>
  <ul>
    <li>
      <Link to="/blog-index/">Blog posts</Link>
    </li>
    <li>
      <Link to="/til-index/">Today I learnt</Link>
    </li>
    <li>
      <Link to="/projects-index/">Projects</Link>
    </li>
    <li>
      <Link to="/about-me/">About me</Link>
    </li>
  </ul>
  <ul>
    <li>Github</li>
    <li>Twitter</li>
    <li>LinkedIn</li>
  </ul>
  </>
)

export default IndexPage
