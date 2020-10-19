import React from "react"

import { graphql, useStaticQuery } from 'gatsby'

const Footer = () => {
  const data = useStaticQuery(graphql`query{site{siteMetadata{title author}}}`)
  return (
    <div>
      <h4>Created by {data.site.siteMetadata.author}, © All rights are reserved 2020</h4>
    </div>
  )
}

export default Footer
