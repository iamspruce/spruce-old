
module.exports = {
  siteMetadata: {
    title: "Spruce.dev",
    author: "Spruce",
    description: "Frontend Web developer from Nigeria,with an eye for great design",
    about: "I’m a Frontend web developer, currently working as a freelencer. I mostly do front-end development, and I’m a Reactjs and CSS kind of person. I like don't just like creating web components, i like creating accessible web components. I also share what I learn and my process on my blog iamspruce.dev/blog.",
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
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Gothic+A1:300,400,400,700`
        ],
        display: 'swap'
      }
    },
    
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark',
    `gatsby-plugin-image`
  ]
}
