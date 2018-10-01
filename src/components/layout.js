import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import {ThemeProvider} from 'styled-components'

import Header from './header'
import './layout.css'

let theme = {
  pink: '#F6207C',
  purple: '#6054FF',
  grey: '#333333',
  sans: `'Montserrat', sans-serif;`,
  serif: `'Playfair Display', serif;`,
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  maxWidth: '1000px',
  headerPurple: `rgba(#6054FF, 0.5)`,
}


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
        </div>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
