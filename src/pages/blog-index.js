import React from "react"
import { graphql, Link } from "gatsby"

export default ({ data }) => {
  return (
    <>
      <div>
        <h1>Blost posts</h1>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h3>
              <Link to={node.frontmatter.path}>
                {node.frontmatter.title}
              </Link>
              <span> — {node.frontmatter.date}</span>
            </h3>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
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
