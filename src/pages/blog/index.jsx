import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../../components/Layout';
import MD from '../../components/common/MD';

const BlogCard = (props) => {
  const { node: { slug, frontmatter } } = props;
  const { title, description, date } = frontmatter;

  return (
    <div className="border rounded-md border-gray-500 
      shadow-lg
      w-full sm:w-1/2
      m-3 p-5
      bg-tertiary
      hover:scale-y-105
      transition-all">
      <Link to={`/blog/${slug}`}>
        <div className="text-2xl text-accent font-display">
          <MD md={title} />
        </div>
        <hr className="border-accent my-3" />
        <div className="text-accent font-display text-lg">
          <MD md={description} />
        </div>
        <div className="uppercase text-base mt-3 font-display text-accent">
          {date}
        </div>
      </Link>
    </div>
  );
};

const Blog = (props) => {

  const { data: { allMdx: { nodes } } } = props;

  return (
    <Layout>
      <div className="flex flex-col items-center">
        { nodes.map((node) => <BlogCard key={node.id} node={node} />) }
      </div>
    </Layout>
  );
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
        }
      }
    }
  }
`;
