import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../../components/Layout';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import MD from '../../components/common/MD';

const Piece = (props) => {
  const { node: { title, description, image, url } } = props;

  return (
    <article className="rounded-md
      shadow-lg
      m-3 p-6 w-full
      justify-self-center self-center
      flex flex-col sm:flex-row 
      items-center bg-tertiary
      hover:scale-y-105 transition-all">
      <div className="mb-3 sm:mb-0 sm:mr-5">
        <a href={url} rel="noopener noreferrer" target="_blank">
          <GatsbyImage image={getImage(image)}/>
        </a>
      </div>

      <div className="text-center flex-grow">
        <div className="text-xl sm:text-2xl lg:text-3xl mb-1 font-display">
          <a href={url} rel="noopener noreferrer" target="_blank">
            {title}
          </a>
        </div>

        <div className="text-sm">
          <MD md={description} />
        </div>
      </div>
    </article>
  );
};

const Writing = (props) => {
  const { data: { allWritingYaml: { nodes } } } = props;
  return (
    <Layout pageTitle="Writing" titleBar="Writing">
      <div class="mx-auto mb-6 text-center font-body text-lg">
        I spend some of my spare time writing fiction and the occasional non-fiction piece. Here are some links to my published works.
      </div>

      <section className="w-full sm:w-10/12 mx-auto
        flex flex-col">
        { nodes.map((node) => <Piece key={node.id} node={node} />) }
      </section>
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