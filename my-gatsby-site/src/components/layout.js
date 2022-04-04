// (9)
import * as React from 'react'
import { Link } from 'gatsby'

// (10) without DESTRUCTURING
// const Layout = (props) => {
//     const pageTitle = props.pageTitle
//     const children = props.children
//     ...
//   }
// // (11) with DESTRUCTURING
const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout