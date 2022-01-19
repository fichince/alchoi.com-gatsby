import * as React from "react";
import { graphql, Link } from "gatsby";
import { Helmet } from 'react-helmet';
import headshot from '../images/headshot.jpg';
import { faGithubSquare, faFacebookSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = (props) => {

  const { site: { siteMetadata: { title } } } = props.data;

  return (
    <>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <div className="absolute top-0 left-0 w-screen h-screen overflow-hidden">
      <div className="homepage w-full h-full bg-cover scale-110 animate-blur-in blur-sm">
      </div>
      <div className="absolute 
        top-1/4 left-1/4 
        w-1/2 h-1/2 min-h-[450px]
        m-auto 
        bg-gradient-to-br from-primary to-secondary rounded-3xl
        animate-fade-in">
        <div className="
          h-32 w-32
          sm:h-52 sm:w-52 
          rounded-full overflow-hidden mx-auto 
          mt-8 border-accent border-2">
          <img src={headshot} />
        </div>
        <div className="mx-auto text-center mt-4 
          text-2xl sm:text-3xl 
          font-display text-accent">
          Albert Choi
        </div>
        <div className="mx-auto text-center mt-1 
          text-lg sm:text-xl
          font-display text-accent">
          I write code and sometimes prose.
        </div>

        <div className="flex flex-col sm:flex-row 
          items-center
          mx-auto w-2/3 sm:justify-evenly mt-4 
          text-xl sm:text-2xl 
          text-red-800 font-display">
          <div className="hover:scale-110">
            <Link to="/blog">Blog</Link>
          </div>
          <div className="hover:scale-110">
            <Link to="/writing">Writing</Link>
          </div>
        </div>

        <div className="flex mt-4 w-2/3 mx-auto justify-evenly
          text-red-800 text-2xl sm:text-4xl">
          <a href="https://github.com/fichince" target="_blank" rel="noreferrer noopener"
            className="hover:scale-110">
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
          <a href="https://www.facebook.com/albert.choi.583/" target="_blank" rel="noreferrer noopener"
            className="hover:scale-110">
            <FontAwesomeIcon icon={faFacebookSquare} />
          </a>
          <a href="https://www.linkedin.com/in/albert-choi-202b8923/" target="_blank" rel="noreferrer noopener"
            className="hover:scale-110">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
