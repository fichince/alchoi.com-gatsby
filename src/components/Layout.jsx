import * as React from 'react'
import { Helmet } from 'react-helmet';
import { Link, useStaticQuery, graphql } from 'gatsby'
import MD from './common/MD';

const NAV = [
  {
    name: 'Blog',
    to: '/blog'
  },
  {
    name: 'Writing',
    to: '/writing'
  },
];

const NavLink = (props) => {
  const { to, name } = props;
  return (
    <Link to={to}>
      <div className="flex-no-grow flex-no-shrink relative p-3 leading-normal text-tertiary font-display 
        no-underline flex items-center hover:bg-tertiary hover:text-accent">
          {name}
      </div>
    </Link>
  );
};

const Layout = ({ pageTitle, children, ...rest }) => {
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

  const isServer = typeof window === 'undefined';

  const [ expanded, setExpanded ] = React.useState(isServer ? true : window.innerWidth > 640);
  React.useEffect(() => {
    const resizeHandler = () => {
      setExpanded(window.innerWidth > 640);
    };

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return (
    <div className="m-auto">
      <Helmet>
        <body className="bg-gradient-to-br from-primary to-secondary min-h-screen" /> 
      </Helmet>

      <nav className="relative select-none bg-accent sm:flex sm:items-stretch w-full text-lg sm:text-xl">
        <div className="flex flex-no-shrink items-stretch h-12">
          <NavLink to="/" name={title} />
          <button className="block sm:hidden cursor-pointer ml-auto relative w-12 h-12 p-4" onClick={() => setExpanded(!expanded)}>
            { expanded ?
              <svg className="fill-current text-tertiary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/></svg>
              :
              <svg className="fill-current text-tertiary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            }
          </button>
        </div>
        { expanded &&
          <div className="sm:flex sm:items-stretch sm:flex-no-shrink sm:flex-grow">
            <div className="sm:flex sm:items-stretch sm:justify-end ml-auto">
            { NAV.map((n, i) => (
              <NavLink to={n.to} name={n.name} />
            ))}
            </div>
          </div>
        }
      </nav>

      <main className="pt-10 pb-20 px-5">
        { pageTitle &&
        <>
          <div className="mt-3 sm:mt-5 mx-auto text-3xl sm:text-5xl text-center text-accent font-display">
            <MD md={pageTitle} />
          </div>
          <hr className="my-4 mx-auto w-full sm:w-3/4 text-center border-accent" />
        </>
        }
        {children}
      </main>
    </div>
  )
}

export default Layout
