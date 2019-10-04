module.exports = {
  siteMetadata: {
    title: `Rabea's space on the web`,
    description: `Blog posts, snippets of things I learnt and projects I worked on.`,
    author: `Rabea Gleissner`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-149407274-1",
      },
    },
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
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            }
          }
        ]
      }
    },
  ],
}
