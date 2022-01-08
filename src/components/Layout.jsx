import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const NAV = [
  {
    name: 'Home',
    to: '/'
  },
  {
    name: 'Blog',
    to: '/blog'
  },
  {
    name: 'Writing',
    to: '/writing'
  },
];

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="m-auto">
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>

      <div className="flex justify-between align-baseline
          bg-black text-white p-3">
        <header className="text-lg">{data.site.siteMetadata.title}</header>
        <nav>
          <ul className="flex">
            { NAV.map((n, i) => (
              <li index={i} className="ml-5">
                <Link to={n.to}>
                  {n.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <main className="p-5 pb-20">
        {children}
      </main>
    </div>
  )
}

export default Layout
