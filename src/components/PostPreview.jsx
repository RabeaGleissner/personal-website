import React from "react"
import { Link } from "gatsby"

import "./post-preview.scss"

const PostPreview = ({ node }) => {
  const { path, title, date } = node.frontmatter
  return (
    <article key={node.id} className="post-preview">
      <h3>
        <Link to={path}>{title}</Link>
        <span> — {date}</span>
      </h3>
      <p>{node.excerpt}</p>
    </article>
  )
}

export default PostPreview;
