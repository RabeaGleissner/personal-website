import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

export default() => {
  return (
    <Layout>
      <h1 className="about-me-title">About me</h1>
      <p>Hello! I'm Rabea. I am a full-stack software engineer based in Singapore.</p>
      <p>I currently work as a JavaScript developer, using React and Node. I also have experience with Ruby, TypeScript, Java and other languages.</p>
      <p>I spent three years working as a consultant at <a href="http://8thlight.com">8th Light</a> in London before I made the switch to a product company.</p>
      <p>This website is a bit of a <Link to="/blog-index/">collection of older and newer blog posts</Link> and <Link to="/til-index/">snippets of things that I learnt</Link>.</p>
    </Layout>
  )
}
