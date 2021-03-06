import React from "react"
import { Link } from "gatsby"

import "./post-preview.scss"

const PostPreview = ({ node, extraClasses }) => {
  const { path, title, date, tags = [] } = node.frontmatter

  const isTil = tags.includes('til')
  const isBlog = tags.includes('blog')

  return (
    <article className={`post-preview ${extraClasses}`}>
      <h2 className="post-preview-title">
        <Link to={path}>{title}</Link>
      </h2>
      <div className="post-preview-meta">
        <div className="post-preview-date">{date}</div>
        {isTil &&
            <Link to="/til-index">
              <div className="post-preview-badge post-preview-til-badge">TIL</div>
            </Link>}
        {isBlog &&
            <Link to="/blog-index">
              <div className="post-preview-badge post-preview-blog-badge">Blog</div>
            </Link>}
          </div>
      <p>{node.excerpt}</p>
      <p>
        <Link to={path}>Read more</Link>
      </p>
    </article>
  )
}

export default PostPreview;
