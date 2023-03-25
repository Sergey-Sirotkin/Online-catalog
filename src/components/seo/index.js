import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Seo = () => {
  const { site, ogImage } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
        ogImage: file(
          absolutePath: { glob: "**/src/images/metatag-image.png" }
        ) {
          publicURL
        }
      }
    `
  )
  
  const {title, description, author, siteUrl} = site.siteMetadata
  
  return <div>Seo</div>
}

export default Seo
