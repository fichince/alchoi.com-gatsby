import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../../components/Layout';
import Showcase from '../../components/common/Showcase';

const Dev = (props) => {
  const { data: { allDevYaml: { nodes } } } = props;
  return (
    <Layout pageTitle="Code" titleBar="Code">
      <div class="mx-auto mb-6 text-center font-body text-lg">
        Here are some links to websites that I've worked on.
      </div>

      <Showcase items={nodes} />
    </Layout>
  );
};

export default Dev;

export const query = graphql`
  query {
    allDevYaml {
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