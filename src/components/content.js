import React, { Component } from 'react'
import styled from 'styled-components'

let ContentWrapper = styled.section`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  height: 500px;
`

export default class content extends Component {
  render() {
    return <ContentWrapper>{this.props.children}</ContentWrapper>
  }
}
