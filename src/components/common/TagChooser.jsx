import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';

const Li = ({ children }) => (
  <li className="
    before:mx-1 before:content-['⋅'] 
    last:after:content-['⋅'] last:after:mx-1
    text-accent">
      {children}
  </li>
);

const TagChooser = (props) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMdx {
        group(field: frontmatter___tags) {
          totalCount
          fieldValue
        }
      }
    }
  `);

  const { allMdx: { group: tags } } = data;
  const { selectedTag } = props;

  const selectedStyle = 'italic font-bold text-pop';

  return (
    <ul className="font-display flex flex-wrap">
      { tags.map(({ fieldValue: tag, totalCount }) => (
        <Li key={tag}> 
          <span className={`underline ${tag === selectedTag ? selectedStyle : ''}`}>
            <Link to={`/blog/tag/${tag}`}>
              {tag}
            </Link>
          </span>
          <span className="ml-1 text-xs">({totalCount})</span>
        </Li>
      ))}
      <Li>
        <span className="underline">
          <Link to="/blog">all</Link>
        </span>
      </Li>
    </ul>
  );
};

export default TagChooser;