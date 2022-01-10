// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Lanef Passion",
  siteUrl: 'https://www.lanefpassion.fr',
  titleTemplate: "%s - Lanef Passion",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "BlogPost",
        resolveAbsolutePaths: true,
        path: "./content/blog/**/*.md",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "CuisinePost",
        resolveAbsolutePaths: true,
        path: "./content/cuisines/**/*.md",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "PartenairePost",
        resolveAbsolutePaths: true,
        path: "./content/partenaires/**/*.md",
      },
    },
    // Sitemap
    // https://gridsome.org/plugins/@gridsome/plugin-sitemap
    // yarn add @gridsome/plugin-sitemap
    // Exclude legal pages (terms, policies, etc)
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        exclude: ['/404']
      }
    }
  ],
  transformers: {
    remark: {
      plugins: ["gridsome-remark-unwrap-images"],
    },
  },
  templates: {
    CuisinePost: "/cuisines/:title",
    BlogPost: "/actualites/:title",
  },
  icon: {
    favicon: {
      src: "./src/favicon.png",
      sizes: [16, 32, 96],
    },
    touchicon: {
      src: "./src/facicon.png",
      sizes: [76, 152, 120, 167],
      precomposed: true,
    },
  },
}
