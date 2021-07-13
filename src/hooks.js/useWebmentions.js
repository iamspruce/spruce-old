import { graphql, useStaticQuery } from "gatsby"

const useWebmentions = () => {
  const  { allWebmention } = graphql`
  query($slug: String!) {
    allWebmention(filter: {wm_target: { eq: $slug }}) {
        totalCount
        edges {
          node {
            id
            published
            author {
              name
              photo
            }
            url
            wm_id
            content {
              html
            }
            }
          }
        }
      }

  `
  return allWebmention
}

export default useWebmentions
