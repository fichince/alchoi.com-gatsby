import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../../components/Layout';

const Piece = (props) => {
  const { node: { title, description, image, url } } = props;

  return (
    <div className="border-2 rounded-md border-gray-500 m-3 p-5 w-72">
      {title}
    </div>
  );
};

const Writing = (props) => {
  const { data: { allWritingYaml: { nodes } } } = props;
  return (
    <Layout pageTitle="Writing">
      <div class="mx-auto mb-6 text-center">
        I spend some of my spare time writing fiction and the occasional non-fiction piece. Here are some links to my published works.
      </div>

      <div className="flex flex-wrap mx-0 sm:mx-96">
        { nodes.map((node) => <Piece key={node.id} node={node} />) }
      </div>
    </Layout>
  );
};

export default Writing;

export const query = graphql`
  query {
    allWritingYaml {
      nodes {
        description
        id
        image
        title
        url
      }
    }
  }
`;