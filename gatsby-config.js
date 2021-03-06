module.exports = {
  siteMetadata: {
    siteTitle: `Freelancing For Everyone - Powered by: Sofolfreelancer`,
    defaultTitle: `Freelancing For Everyone - Powered by: Sofolfreelancer`,
    siteTitleShort: `Freelancing For Everyone`,
    siteDescription: `Freelancing For Everyone - Powered by: Sofolfreelancer - will show you the path to your successful journey to become a freelancer`,
    siteUrl: `http://f4e.online/`,
    siteAuthor: `@sakifkhan98`,
    siteImage: `/cover.png`,
    siteLanguage: `en`,
    themeColor: `#7159c1`,
    basePath: `/`,
    footer: `Powered By Sofol Freelancer`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/SakifKhan98/sf-freelancing-guide`,
        baseDir: `/`,
      },
    },
    {
      resolve: `@rocketseat/gatsby-theme-docs-core`,
      options: {
        // basePath: `documentation`,
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/SakifKhan98/sf-freelancing-guide`,
        baseDir: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocketseat Gatsby Themes`,
        short_name: `RS Gatsby Themes`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: ``,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `#`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Kohinoor", "Roboto"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
    {
      resolve: `gatsby-remark-responsive-iframe`,
      options: {
        wrapperStyle: `margin-bottom: 1.0725rem`,
      },
    },
  ],
  pathPrefix: "/sf-guideline",
};
