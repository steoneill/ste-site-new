import React, { Component } from 'react'
import styled from 'styled-components'

let WaveSVG = styled.svg`
  width: 100%;
  height: 205px;
  position: absolute;
  bottom: -10px;
  left: 0;
`

class Wave extends Component {
  render() {
    return (
      <WaveSVG width="100%" height="205" viewBox="0 0 100% 205" fill="none">
        <path fill="#f8f8f8">
          <animate
            repeatCount="indefinite"
            fill="freeze"
            attributeName="d"
            dur="25s"
            values="M3000,205H0V30C0,30,111,0,458,0c485.94,0,1457.4,60,1943.33,60C2711,60,3000,0,3000,0V205z;
            M3000,205H0V30c0,0,111,30,458,30c485.94,0,1457.4-30,1943.33-30C2711,30,3000,0,3000,0V205z;
            M3000,195H0V20c0,0,111,70,458,70C943.94,90,1915.4,0,2401.33,0C2711,0,3000,60,3000,60V195z;
            M3000,205H0V30c0,0,111,30,458,30c485.94,0,1457.4-30,1943.33-30C2711,30,3000,0,3000,0V205z;
            M3000,205H0V30C0,30,111,0,458,0c485.94,0,1457.4,60,1943.33,60C2711,60,3000,0,3000,0V205z"
          />
        </path>
      </WaveSVG>
    )
  }
}

export default Wave
