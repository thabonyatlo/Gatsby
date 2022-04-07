// (9)
import * as React from "react";
import { Link } from "gatsby";
// (19)
import { container } from "./layout.module.css";
// (22)
import {
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  // (34)
  siteTitle,
} from "./layout.module.css";
// (30)
import { useStaticQuery, graphql } from "gatsby";

// (10) without DESTRUCTURING
// const Layout = (props) => {
//     const pageTitle = props.pageTitle
//     const children = props.children
//     ...
//   }
// // (11) with DESTRUCTURING
const Layout = ({ pageTitle, children }) => {
  // (31)
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);
  return (
    <div /*(20)*/ className={container}>
      {/* (32) */}
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <header /*(34)*/ className={siteTitle}>
        {data.site.siteMetadata.title}
      </header>
      {/* <h4>{data.site.siteMetadata.description}</h4> */}

      <title>{pageTitle}</title>
      <nav>
        <ul /*(23)*/ className={navLinks}>
          <li /*(24)*/ className={navLinkItem}>
            <Link to="/">Home</Link>
          </li>
          <li /*(24)*/ className={navLinkItem}>
            <Link to="/about">About</Link>
          </li>
          {/* (36) */}
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 /*(25)*/ className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
