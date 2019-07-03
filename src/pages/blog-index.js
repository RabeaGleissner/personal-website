import React from "react"
import { graphql, Link } from "gatsby"

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

const PostPreview = ({ node }) => {
  const { path, title, date } = node.frontmatter
  return (
    <div key={node.id}>
      <h3>
        <Link to={path}>{title}</Link>
        <span> — {date}</span>
      </h3>
      <p>{node.excerpt}</p>
    </div>
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
