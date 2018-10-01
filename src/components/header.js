import React, { Component } from 'react';
import styled from 'styled-components'

let HeaderWrapper = styled.header`
  background: ${props => props.theme.purple};
  height: 85vh;
`

let HeaderInner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  color: white;
`

class header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <HeaderInner>
          <h1>test</h1>
        </HeaderInner>
      </HeaderWrapper>
    );
  }
}

export default header;