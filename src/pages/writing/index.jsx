import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../../components/Layout';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import MD from '../../components/common/MD';

const Piece = (props) => {
  const { node: { title, description, image, url } } = props;

  return (
    <div className="border rounded-md border-gray-500 
      shadow-lg
      m-3 p-6 w-72
      justify-self-center self-center
      flex flex-col items-center">
      <div className="mb-1">
        <a href={url} rel="noopener noreferrer" target="_blank">
          <GatsbyImage image={getImage(image)}/>
        </a>
      </div>

      <div className="text-xl mb-1">
        <a href={url} rel="noopener noreferrer" target="_blank">
          {title}
        </a>
      </div>

      <div className="text-sm">
        <MD md={description} />
      </div>
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

      <div className="w-full sm:w-2/3 mx-auto
        grid grid-cols-1 sm:grid-cols-3 gap-3">
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
        id
        description
        title
        url
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;