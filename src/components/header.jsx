import React from "react"

import { Link } from "gatsby"

const Header = () => {
  return (
    <div>
      <h1>Bassem Azizi</h1>
      <nav>
        <ul>
          <li>
            <Link to="/aboutMe">About Me</Link>
          </li>
          <li>
            <Link to="/work">Works</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
