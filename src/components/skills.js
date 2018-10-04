import React, { Component } from 'react'
import styled from 'styled-components'

let SkillOuter = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 20px;
`

let SkillBlock = styled.div`
  border-radius: 5px;
  box-shadow: ${props => props.theme.bs};
  height: 300px;
  border-top: 5px solid ${props => props.theme.purple};
`

export default class skills extends Component {
  render() {
    return (
      <SkillOuter>
        <SkillBlock>
          <p>Test</p>
        </SkillBlock>
        <SkillBlock>
          <p>Test</p>
        </SkillBlock>
        <SkillBlock>
          <p>Test</p>
        </SkillBlock>
      </SkillOuter>
    )
  }
}
