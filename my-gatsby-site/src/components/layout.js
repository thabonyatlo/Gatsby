// (9)
import * as React from 'react'
import { Link } from 'gatsby'
// (19)
import { container } from './layout.module.css'
// (22)
import {
    heading,
    navLinks,
    navLinkItem,
    navLinkText
  } from './layout.module.css'

// (10) without DESTRUCTURING
// const Layout = (props) => {
//     const pageTitle = props.pageTitle
//     const children = props.children
//     ...
//   }
// // (11) with DESTRUCTURING
const Layout = ({ pageTitle, children }) => {
  return (
    
    <div /*(20)*/className={container}>
        
      <title>{pageTitle}</title>
      <nav>
        <ul /*(23)*/className={navLinks}>
          <li /*(24)*/className={navLinkItem}>
              <Link to="/">Home</Link>
            </li>
          <li /*(24)*/className={navLinkItem}>
              <Link to="/about">About</Link>
            </li>
        </ul>
      </nav>
      <main>
        <h1 /*(25)*/className={heading}>
            {pageTitle}
        </h1>
        {children}
      </main>
    </div>
  )
}

export default Layout