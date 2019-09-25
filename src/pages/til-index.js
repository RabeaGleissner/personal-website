import React, { useState } from "react"
import { graphql } from "gatsby"
import PostPreview from "../components/PostPreview"
import Layout from "../components/Layout"
import TilIntro from "../components/TilIntro"

import './article-index.scss'

export default ({ data }) => {
  const [showIntro, setShowIntro] = useState(false);
  console.log('showIntro', showIntro);
  return (
    <Layout>
      <div className="article-index">
        <header className="article-index-header">
          <h1 className="article-index-title article-index-title-til">Today I learnt</h1>
        </header>
        <div className="til-intro">
          <button onClick={() => setShowIntro(!showIntro)}>
            <div className="til-intro-button">
              <p className="til-intro-button-link">What's this all about then?</p>
            </div>
          </button>
          {showIntro && <TilIntro closeIntro={() => setShowIntro(false)} />}
        </div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <PostPreview node={node} />
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC },
    filter: { frontmatter: { tags: { in: ["til"] } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            path
            date(formatString: "DD MMMM YYYY")
          }
          excerpt
        }
      }
    }
  }
`
