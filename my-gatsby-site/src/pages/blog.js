// (35)
import * as React from "react";
import Layout from "../components/layout";
// (40)
import { graphql } from "gatsby";

const BlogPage = ({ /*(42)*/ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {/* (43) */}
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

// (41)
export const query = graphql`
  query BlogPagesOnly {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      nodes {
        name
      }
    }
  }
`;

export default BlogPage;
