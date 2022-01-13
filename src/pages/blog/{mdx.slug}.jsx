import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout';
import MD from '../../components/common/MD';
import { MDXRenderer } from 'gatsby-plugin-mdx';


const BlogPost = (props) => {
  const { data: { mdx: { frontmatter, body } } } = props;
  const { title, description, date } = frontmatter;

  return (
    <Layout pageTitle={title}>

      <div className="mx-auto flex flex-col w-full
        md:flex-row md:w-3/4">

        <div className="w-full md:w-1/3 md:mr-4 md:ml-2
          text-center md:text-right md:pr-10">
          <div className="mb-2 font-display text-accent text-2xl">
            <MD md={description} />
          </div>
          <div className="uppercase font-display text-accent text-lg">
            {date}
          </div>
        </div>

        <hr className="my-4 border-accent" />

        <article className="prose prose-neutral flex-grow 
          font-body text-lg md:text-xl">
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