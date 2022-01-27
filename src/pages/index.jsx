import * as React from "react";
import { graphql, Link } from "gatsby";
import headshot from '../images/headshot.jpg';
import { faGithubSquare, faFacebookSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BigLayout from "../components/BigLayout";

const Home = (props) => {

  const { site: { siteMetadata: { title } } } = props.data;

  return (
    <BigLayout animate>
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
        text-pop font-display">
        <div className="hover:scale-110">
          <Link to="/blog">Blog</Link>
        </div>
        <div className="hover:scale-110">
          <Link to="/writing">Writing</Link>
        </div>
      </div>

      <div className="flex mt-4 w-2/3 mx-auto justify-evenly
        text-pop text-2xl sm:text-4xl">
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

    </BigLayout>
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
