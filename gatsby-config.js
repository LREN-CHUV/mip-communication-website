module.exports = {
  siteMetadata: {
    title: 'MIP — Human Brain Project',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'u61ykxdyhywa',
        accessToken: 'f690447fc2c2487543361d77354fe0c2a85bb12100c9b6ca0fe905525ec35315',
      },
    },
  ],
}
