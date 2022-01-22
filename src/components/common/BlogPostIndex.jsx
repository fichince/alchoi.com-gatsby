import React from 'react';
import { Link } from 'gatsby';
import Layout from '../Layout';
import MD from './MD';

const BlogCard = (props) => {
  const { node: { slug, frontmatter } } = props;
  const { title, description, date } = frontmatter;

  return (
    <div className="rounded-md
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
        <div className="flex justify-between text-accent font-body items-baseline">
          <MD md={description} />
          <span className="min-w-fit">{date}</span>
        </div>
      </Link>
    </div>
  );
};

const BlogPostIndex = (props) => {

  const { nodes } = props;

  return (
    <Layout titleBar="Blog">
      <div className="flex flex-col items-center">
        { nodes.map((node) => <BlogCard key={node.id} node={node} />) }
      </div>
    </Layout>
  );
};

export default BlogPostIndex;
