import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../../components/Layout';
import map from 'lodash/fp/map';
import sortBy from 'lodash/fp/sortBy';
import reverse from 'lodash/fp/reverse';
import flow from 'lodash/fp/flow';
import split from 'lodash/split';
import join from 'lodash/fp/join';
import take from 'lodash/fp/take';
import drop from 'lodash/fp/drop';

const BlogCard = (props) => {
  const { node: { slug, frontmatter, date } } = props;
  const { description, title } = frontmatter;

  return (
    <div className="border-2 rounded-md border-gray-500 
      w-full sm:w-1/2
      m-3 p-5
      ">
      <Link to={`/blog/${date}-${slug}`}>
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

  const sorted = 
    flow(
      map((node) => {
        const s = split(node.slug, '-');

        const date = flow(
          take(3),
          join('-')
        )(s);

        const strippedSlug = flow(
          drop(3),
          join('-')
        )(s);

        return {
          ...node,
          date,
          slug: strippedSlug
        };
      }),
      sortBy([
        node => new Date(node.date)
      ]),
      reverse
    )(nodes);
  
  return (
    <Layout pageTitle="Blog">
      <div className="flex flex-col items-center">
        { sorted.map((node) => <BlogCard key={node.id} node={node} />) }
      </div>
    </Layout>
  );
};

export default Blog;

export const query = graphql`
  query {
    allMdx {
      nodes {
        slug
        id
        frontmatter {
          description
          title
        }
      }
    }
  }
`;