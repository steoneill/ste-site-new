import React, { Component } from 'react'
import styled from 'styled-components'

let ContentWrapper = styled.section`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  height: auto;
  font-family: ${props => props.theme.sans};
  padding: 15px;
`

export default class content extends Component {
  render() {
    return <ContentWrapper>{this.props.children}</ContentWrapper>
  }
}
