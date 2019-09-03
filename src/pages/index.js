import React from "react"
import { graphql, Link } from "gatsby"
import PostPreview from "../components/PostPreview"
import Layout from "../components/Layout"

import SEO from "../components/seo"
import "./index.scss"

const IndexPage = ({ data }) => (
  <>
  <SEO title="Home" />
  <Layout>
    <div className="home">
      <header>
        <section className="about">
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
              <Link to="/about-me/">About me</Link>
            </li>
          </ul>
          <ul>
            <li>Github</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul>
        </section>
      </header>
      <section className="writings">
        <div>
          <h1>Things I wrote</h1>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <PostPreview  node={node} />
          ))}
        </div>
        <div className="read-more">Read more <Link to="/til-index/">Today I learnt</Link> or <Link to="/blog-index/">Blog posts</Link></div>
      </section>
    </div>
  </Layout>
  </>
)
export const query = graphql`
  query {
    allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC },
    limit: 10
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            path
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
