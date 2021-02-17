module.exports = {
  siteMetadata: {
    title: "Chaosbay",
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "8me5yfa8",
        dataset: "",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
