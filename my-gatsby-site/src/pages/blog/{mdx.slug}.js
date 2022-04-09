// (51)
import * as React from "react";
// (52)
import Layout from "../../components/layout";
// (53)
import { graphql } from "gatsby";
// (55)
import { MDXRenderer } from "gatsby-plugin-mdx";

const BlogPost = ({ /*(56)*/ data }) => {
  return (
    // <Layout pageTitle="Super Cool Blog Posts">
    // <p>My blog post contents will go here (eventually).</p>
    // (57)
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  );
};

// (54)
export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`;

export default BlogPost;
