import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout';
import MD from '../../components/common/MD';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Tags from '../../components/common/Tags';


const BlogPost = (props) => {
  const { data: { mdx: { frontmatter, body } } } = props;
  const { title, description, date, tags } = frontmatter;

  return (
    <Layout pageTitle={title} titleBar={title}>
      <div className="mx-auto flex flex-col w-full
        lg:flex-row lg:w-3/4">

        <div className="w-full lg:w-1/3 lg:mr-4 lg:ml-2
          text-center lg:text-right lg:pr-10">
          <div className="mb-2 font-display text-accent text-2xl">
            <MD md={description} />
          </div>
          <div className="uppercase font-display text-accent text-lg">
            {date}
          </div>
          <div className="mt-2 flex justify-center lg:justify-end">
            <Tags tags={tags} />
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
        tags
      }
      body
    }
  }
`;