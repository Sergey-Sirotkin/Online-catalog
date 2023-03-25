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

  const { title, description, author, siteUrl } = site.siteMetadata

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="theme-color" content="#ffffff"></meta>
      <meta name="msapplication-TileColor" content="#ffffff"></meta>
      {/* Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content={author} />
    </>
  )
}

export default Seo
