import React from "react"
import { Link } from "gatsby"

import "./post-preview.scss"

const PostPreview = ({ node }) => {
  const { path, title, date, tags = [] } = node.frontmatter
  console.log('tags', tags);

  const isTil = tags.includes('til')
  const isBlog = tags.includes('blog')

  return (
    <article key={node.id} className="post-preview">
      <h2 className="post-preview-title">
        <Link to={path}>{title}</Link>
      </h2>
      <div className="post-preview-meta">
        <div className="post-preview-date">{date}</div>
        {isTil && <div className="post-preview-badge post-preview-til-badge">TIL</div>}
        {isBlog && <div className="post-preview-badge post-preview-blog-badge">Blog</div>}
      </div>
      <p>{node.excerpt}</p>
      <p>
        <Link to={path}>Read more</Link>
      </p>
    </article>
  )
}

export default PostPreview;
