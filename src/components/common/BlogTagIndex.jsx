import { graphql } from 'gatsby';
import React from 'react';
import BlogPostIndex from './BlogPostIndex';

const BlogTagIndex = (props) => {

  const { pageContext: { tag } } = props;
  const { data: { allMdx: { nodes } } } = props;
  return <BlogPostIndex nodes={nodes} selectedTag={tag} />;
};

export default BlogTagIndex;

export const query = graphql`
  query ($tag: String) {
    allMdx(
      filter: {frontmatter: {tags: {in: [ $tag ]}}}
      sort: {fields: frontmatter___date, order: DESC}
    ) {
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