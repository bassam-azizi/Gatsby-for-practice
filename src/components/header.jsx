import React from "react"
import { Link } from "gatsby"

import headerStyles from "./header.module.scss"

const Header = () => {
  return (
    <div className={headerStyles.header}>
      <h1>
        <Link to="/" className={headerStyles.title}>
          Bassem Azizi
        </Link>
      </h1>
      <nav>
        <ul className={headerStyles.ul}>
          <li>
            <Link
              to="/aboutMe"
              className={headerStyles.link}
              activeClassName={headerStyles.activeLink}
            >
              About Me
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
