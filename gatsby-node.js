const path = require(`path`)

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve('./src/templates/blog.js')

  const result = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  result.data.allContentfulBlogPost.edges.forEach((edge) => {
    createPage({
      path: `/blog/${edge.node.slug}`,
      component: blogTemplate,
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: edge.node.slug,
      },
    })
  })
}