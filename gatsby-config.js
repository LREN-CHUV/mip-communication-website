module.exports = {
  siteMetadata: {
    title: 'MIP — Human Brain Project',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'rocybtov1ozk',
        accessToken: '6f35edf0db39085e9b9c19bd92943e4519c77e72c852d961968665f1324bfc94',
      },
    },
  ],
}
