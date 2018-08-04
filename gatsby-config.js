module.exports = {
  siteMetadata: {
    title: 'Knikni студия дизайна',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
        resolve: 'gatsby-source-behance',
        options: {
            username: 'kniknistud2053',
            apiKey: `rzu5WSUC8ZnRFyfWTwnE0LP1ZCWNGxiv`,
        },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Istok Web`, ],
      },
    },
    {
        resolve: `gatsby-plugin-typography`,
        options: {
            pathToConfigModule: `src/utils/typography.js`,
        },
    },
  ],
}
