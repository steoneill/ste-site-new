import React, { Component } from 'react'
import styled from 'styled-components'

let FooterContent = styled.div`
  background: ${props => props.theme.purple};
  width: 100%;
  height: 500px;
`

export default class footer extends Component {
  render() {
    return <FooterContent />
  }
}
