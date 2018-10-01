import React, { Component } from 'react';
import styled from 'styled-components'

let HeaderWrapper = styled.header`
  background: ${props => props.theme.purple};
  height: 85vh;
`

let HeaderInner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-areas:
  "nav nav"
  "content image";
`


let HeaderContent = styled.div`
  color: white;
  font-family: ${props => props.theme.sans};
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-area: content;
`

let HeaderGreeting = styled.h3`
  font-size: 20px;
  margin-bottom: 0;
  color: rgba(255,255,255,0.85);
  font-weight: 400;
`

let HeaderTitle = styled.h1`
  font-size: 48px;
  margin-top: 0;
`

let HeaderCopy = styled.p`
  font-family: ${props => props.theme.serif};
  width: 50%;
`

let Nav = styled.nav`
  height: 200px;
  grid-area: nav;
`



class header extends Component {

  constructor(props) {
    super(props)

    this.Greeter = this.Greeter.bind(this)
  }

  Greeter() {
    var today = new Date();
    var hourNow = today.getHours();

    if (hourNow > 18) {
      return 'Good evening!';
    } else if (hourNow > 12) {
      return 'Good afternoon!';
    } else if (hourNow > 0) {
      return 'Good morning!';
    } else {
      return 'Welcome!';
    }
  }
  render() {
    return (
      <HeaderWrapper>
        <HeaderInner>
          <HeaderContent>
            <Nav />
            <HeaderGreeting>
              {this.Greeter()}
            </HeaderGreeting>
            <HeaderTitle>
              My name's Ste.
            </HeaderTitle>
            <HeaderCopy>
              I’m a full stack web developer based in Leeds, England. I like to make bold, beautiful websites that don’t take themselves too seriously.
            </HeaderCopy>
          </HeaderContent>
        </HeaderInner>
      </HeaderWrapper>
    );
  }
}

export default header;