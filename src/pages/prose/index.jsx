import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../../components/Layout';
import Showcase from '../../components/common/Showcase';

const Writing = (props) => {
  const { data: { allWritingYaml: { nodes } } } = props;
  return (
    <Layout pageTitle="Prose" titleBar="Prose">
      <div class="mx-auto mb-6 text-center font-body text-lg">
        I spend some of my spare time writing fiction and the occasional non-fiction piece. Here are some links to my published works.
      </div>

      <Showcase items={nodes} />
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
            gatsbyImageData(
              width: 250
              height: 250
            )
          }
        }
      }
    }
  }
`;