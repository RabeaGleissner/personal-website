module.exports = {
  siteMetadata: {
    title: `Rabea's little space on the web`,
    description: `Blog posts, snippets of things I learnt and projects I worked on.`,
    author: `Rabea Gleissner`,
  },
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogPosts`,
        path: `${__dirname}/src/markdown/blog-posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `tilSnippets`,
        path: `${__dirname}/src/markdown/today-i-learnt`,
      },
    },
  ],
}
