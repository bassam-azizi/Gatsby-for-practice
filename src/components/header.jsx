import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import headerStyles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`query{site{siteMetadata{title}}}`)
  return (
    <div className={headerStyles.header}>
      <h1>
        <Link to="/" className={headerStyles.title}>
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={headerStyles.ul}>
          <li>
            <Link
              to="/blog"
              className={headerStyles.link}
              activeClassName={headerStyles.activeLink}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/work"
              className={headerStyles.link}
              activeClassName={headerStyles.activeLink}
            >
              Works
            </Link>
          </li>
          <li>
            <Link
              to="/aboutMe"
              className={headerStyles.link}
              activeClassName={headerStyles.activeLink}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={headerStyles.link}
              activeClassName={headerStyles.activeLink}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
