import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout';
import MD from '../../components/common/MD';
import { MDXRenderer } from 'gatsby-plugin-mdx';


const BlogPost = (props) => {
  const { data: { mdx: { frontmatter, body } } } = props;
  const { title, description, date } = frontmatter;

  return (
    <Layout>
      <div className="mt-3 sm:mt-7 mx-auto text-3xl sm:text-5xl text-center">
        <MD md={title} />
      </div>
      <hr className="my-4 mx-auto w-full sm:w-3/4 text-center" />

      <div className="mx-auto flex flex-col w-full
        sm:flex-row sm:w-3/4 ">
        <div className="w-full sm:w-1/3 sm:mr-4 sm:ml-2
          text-left sm:text-right">
          <div className="mb-2">
            <MD md={description} />
          </div>
          <div className="italic">
            {date}
          </div>
        </div>
        <hr className="my-4" />
        <article className="prose flex-grow">
          <MDXRenderer>
            {body}
          </MDXRenderer>
        </article>
      </div>
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        description
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`;