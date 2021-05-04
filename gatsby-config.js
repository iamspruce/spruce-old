
module.exports = {
  siteMetadata: {
    title: "Spruce.dev",
    author: "Spruce",
    description: "Frontend Web developer from Nigeria,with an eye for great design",
    about: "I’m a Staff Software Engineer currently working as Tech Lead of the Doc Squad at Algolia. I mostly do front-end development, and I’m a Vue.js and CSS nerd. I can't shut up about test-driven development and utility-first CSS. I also share what I learn on my blog frontstuff.io, or at meetups and conferences",
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
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: `rxlcfytp4iti`,
        accessToken: `BOeFPslYVrfuxo-HUU94PPPvhNkFMzHe8o1S-4FEbws`,
      }
    },
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
    'gatsby-transformer-remark'
  ]
}
