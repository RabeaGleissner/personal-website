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
  <Layout isHome>
    <div className="home">
      <HomepageHeader />
      <section className="writings">
        <div>
          <h3>Things I learnt or thought about</h3>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <PostPreview extraClasses="homepage" node={node} key={node.id} />
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
    limit: 60
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            path
            date(formatString: "DD MMMM YYYY")
            tags
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
