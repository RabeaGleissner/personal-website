import React from "react"
import { graphql } from "gatsby"
import PostPreview from "../components/PostPreview"

export default ({ data }) => {
  return (
    <>
    <div>
      <h1>Blost posts</h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <PostPreview  node={node} />
      ))}
    </div>
    </>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC },
    filter: { frontmatter: { tags: { in: ["blog"] } } }
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
