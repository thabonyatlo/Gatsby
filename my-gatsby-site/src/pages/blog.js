// (35)
import * as React from "react";
import Layout from "../components/layout";
// (40)
import { graphql } from "gatsby";
// (49)
import { MDXRenderer } from 'gatsby-plugin-mdx';

const BlogPage = ({ /*(42)*/ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {/* (43) */}
      <ul>
        {/* {data.allFile.nodes.map((node) => ( */}
        {/* (46) */}
        {/* {data.allMdx.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))} */}
        {/* (48) */}
        {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>Posted: {node.frontmatter.date}</p>
            {/* (50) */}
            <MDXRenderer>
              {node.body}
            </MDXRenderer>
          </article>
        ))
      }
      </ul>
    </Layout>
  );
};

// (41)
// export const query = graphql`
//   query BlogPagesOnly {
//     allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
//       nodes {
//         name
//       }
//     }
//   }
// `;
// (47)
export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          title
          date(formatString: "D MMMM , YYYY")
        }
        id
        body
      }
    }
  }
`

export default BlogPage;
