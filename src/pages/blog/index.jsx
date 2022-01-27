import React from 'react';
import { graphql } from 'gatsby';
import BlogPostIndex from '../../components/common/BlogPostIndex';

const Blog = (props) => {

  const { data: { allMdx: { nodes } } } = props;
  return <BlogPostIndex nodes={nodes} />;
};

export default Blog;

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        slug
        id
        frontmatter {
          description
          date(formatString: "MMMM D, YYYY")
          title
          tags
        }
      }
    }
  }
`;
