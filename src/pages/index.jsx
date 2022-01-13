import * as React from "react"
import { Link, graphql } from "gatsby"
import headshot from '../images/headshot.jpg';

const Home = (props) => {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen overflow-clip">
      <div className="homepage w-full h-full bg-cover scale-110 animate-blur-in blur-sm">
      </div>
      <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 m-auto 
        bg-gradient-to-br from-primary to-secondary rounded-3xl
        animate-fade-in">
        <div className="h-52 w-52 rounded-full overflow-clip mx-auto mt-8 border-accent border-2">
          <img src={headshot} />
        </div>
        <div className="mx-auto text-center mt-4 font-display text-3xl text-accent">
          Albert Choi
        </div>
        <div className="mx-auto text-center mt-1 font-display text-xl text-accent">
          Words and Code
        </div>

        <div className="flex mx-auto w-2/3 justify-evenly mt-4 text-red-800 text-2xl font-display">
          <div className="hover:scale-110">
            <Link to="/blog">Blog</Link>
          </div>
          <div className="hover:scale-110">
            <Link to="/writing">Writing</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
