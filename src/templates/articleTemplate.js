import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"

import "./article.scss"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { date, title, tags = [] } = frontmatter
  const isTil = tags.includes('til')
  const extraClass = isTil ? 'til' : 'blog'

  return (
    <Layout>
      <div className="article-container">
        <div className={`article ${extraClass}-article`}>
          <div className="article-header">
            <h1 className={`article-title ${extraClass}-article-title`}>{title}</h1>
            <div className="article-date">{date}</div>
          </div>
          <div
            className="article-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
        <section className="article-read-more">
          <div className="article-read-more-links">
            <h4>Read more:</h4>
            <p><Link to="/blog-index/">Blog posts</Link></p>
            <p><Link to="/til-index/">Today I learnt</Link></p>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD MMMM YYYY")
        path
        title
        tags
      }
    }
  }
`
