module.exports = {
  siteMetadata: {
    title: 'MIP — Human Brain Project',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'vywv4lsnlnwy',
        accessToken: '536f5f640987cd035c7d123b0562d5166e875d843db7646ff54330b93696397d',
      },
    },
    `gatsby-transformer-remark`,
  ],
}
