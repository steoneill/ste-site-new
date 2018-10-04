import React, { Component } from 'react'
import styled from 'styled-components'
import FooterWaves from './footerWaves'

let AnimOuter = styled.div`
  position: relative;
  bottom: -20px;
`

let Animation = styled(FooterWaves)`
  position: absolute;
  left: 0;
`

export default class FooterAnim extends Component {
  render() {
    return (
      <AnimOuter>
        <Animation />
      </AnimOuter>
    )
  }
}
