import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

const BigLayout = (props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const { site: { siteMetadata: { title } } } = data;
  const { titleBarText, children, animate } = props;

  return (
    <>
    <Helmet>
      <title>{ titleBarText ? `${titleBarText} | ` : ''}{title}</title>
    </Helmet>
    <div className="absolute top-0 left-0 w-screen h-screen overflow-hidden">
      <div className="homepage w-full h-full bg-cover scale-110 animate-blur-in blur-sm">
      </div>
      <div className={`absolute 
        top-1/4 left-1/4 
        w-1/2 h-1/2 min-h-[450px]
        m-auto 
        bg-gradient-to-br from-primary to-secondary rounded-3xl
        ${animate ? 'animate-fade-in' : ''}`}>
        {children}
      </div>
    </div>
    </>
  );
};

export default BigLayout;