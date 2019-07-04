import React from "react"
import { Link } from "gatsby"

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

export default PostPreview;
