module.exports = {
  siteMetadata: {
    title: "Spruce.dev",
    author: "Spruce",
    description: "Frontend Web developer from Nigeria",
    skills: [
      {
        name: "React",
        icon: "react" 
      },
      {
        name: "Javascript",
        icon: "javascript" 
      },
      {
        name: "CSS",
        icon: "css" 
      },
      {
        name: "HTML",
        icon: "html" 
      }
    ]
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark'
  ],
}
