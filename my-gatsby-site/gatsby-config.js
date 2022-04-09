module.exports = {
  siteMetadata: {
    title: "My First Gatsby Site",
    siteUrl: `https://gatsbymaster53718.gatsbyjs.io/`,
    description:
      "This is not actually my first one, I've been around the block quite a few times.",
  },
  plugins: [
    // (26)
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    // (39)
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    // (45)
    "gatsby-plugin-mdx",
    // (64)
    "gatsby-transformer-sharp",
  ],
};
