import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import styled, { ThemeProvider } from 'styled-components'

import Header from './header'
import FooterAnim from './FooterAnim'
import Footer from './footer'
import Skills from './skills'
import ContentWrapper from './content'
import Contact from './Contact'
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
          {/* <ContentWrapper>
            <h1>About</h1>
          </ContentWrapper>

          <ContentWrapper>
            <Skills />
          </ContentWrapper>

          <ContentWrapper>
            <h1>Work</h1>
          </ContentWrapper>

          <ContentWrapper>
            <Contact />
          </ContentWrapper>
          <FooterAnim /> */}

          {/* <Footer /> */}
        </div>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
