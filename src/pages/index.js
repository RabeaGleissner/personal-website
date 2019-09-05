import React from "react"
import { graphql, Link } from "gatsby"
import PostPreview from "../components/PostPreview"
import Layout from "../components/Layout"
import HomepageHeader from "../components/HomepageHeader"

import SEO from "../components/seo"
import "./index.scss"

const IndexPage = ({ data }) => (
  <>
  <SEO title="Home" />
  <Layout>
    <div className="home">
      <HomepageHeader />
      <section className="writings">
        <div>
          <h1>Things I wrote</h1>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <PostPreview  node={node} />
          ))}
        </div>
        <div className="read-more">Read more <Link to="/til-index/">Today I learnt</Link> or <Link to="/blog-index/">Blog posts</Link></div>
        <footer>
          © {new Date().getFullYear()},
          {` `}
          <a href="https://github.com/RabeaGleissner/gatsby-blog">View source</a>
        </footer>
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
            tags
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
