// (51)
import * as React from "react";
// (52)
import Layout from "../../components/layout";
// (53)
import { graphql } from "gatsby";
// (55)
import { MDXRenderer } from "gatsby-plugin-mdx";
// (66)
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogPost = ({ /*(56)*/ data }) => {
  // (67)
  const image = getImage(data.mdx.frontmatter.hero_image);
  return (
    // <Layout pageTitle="Super Cool Blog Posts">
    // <p>My blog post contents will go here (eventually).</p>
    // (57)
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {/* (68) */}
      <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
      {/* (69) */}
      <p>
        Photo Credit:{" "}
        <a href={data.mdx.frontmatter.hero_image_credit_link}>
          {data.mdx.frontmatter.hero_image_credit_text}
        </a>
      </p>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  );
};

// (54)
// export const query = graphql`
//   query ($id: String) {
//     mdx(id: { eq: $id }) {
//       frontmatter {
//         title
//         date(formatString: "MMMM D, YYYY")
//       }
//       body
//     }
//   }
// `;
// (65)
export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default BlogPost;
