import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../../components/Layout';

const BlogCard = (props) => {
  const { node: { slug, frontmatter } } = props;
  const { description, title, date } = frontmatter;

  return (
    <div className="border-2 rounded-md border-gray-500 
      w-full sm:w-1/2
      m-3 p-5
      ">
      <Link to={`/blog/${slug}`}>
        <div className="text-xl">{title}</div>
      </Link>
      <hr className="bg-slate-600 my-1" />
      <div className="text-sm prose">
        {description}
      </div>
      <div className="text-sm mt-3 italic">
        {date}
      </div>
    </div>
  );
};

const Blog = (props) => {

  const { data: { allMdx: { nodes } } } = props;

  return (
    <Layout pageTitle="Blog">
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