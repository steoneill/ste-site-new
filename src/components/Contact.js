import React, { Component } from 'react'
import styled from 'styled-components'
import FooterWaves from './footerWaves'

let ContactOuter = styled.div`
  position: relative;
`

let Animation = styled(FooterWaves)`
  position: absolute;
  bottom: 0;
  left: 0;
`

export default class Contact extends Component {
  render() {
    return <ContactOuter />
  }
}
