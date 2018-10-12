import React, { Component } from 'react'
import styled from 'styled-components'
import Wave from './Wave'

let HeaderWrapper = styled.header`
  background: ${props => props.theme.purple};
  height: 100vh;
  position: relative;
`

let HeaderInner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-areas:
    'nav nav'
    'content content'
    'wave wave';
`

let HeaderContent = styled.div`
  color: white;
  font-family: ${props => props.theme.sans};
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-area: content;

  @media screen and (max-width: 768px) {
    padding: 15px;
  }
`

let HeaderGreeting = styled.h3`
  font-size: 20px;
  margin-bottom: 0;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 400;
`

let HeaderTitle = styled.h1`
  font-size: 48px;
  margin-top: 0;
`

let socialLink = styled.a`
  color: white;
  text-decoration: none;
`

let HeaderCopy = styled.p`
  font-family: ${props => props.theme.serif};
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

let Nav = styled.nav`
  height: 200px;
  grid-area: nav;
`

let Links = styled.div`
  display: flex;
  justify-content: space-around;
`

class header extends Component {
  constructor(props) {
    super(props)

    this.Greeter = this.Greeter.bind(this)

    this.state = {
      toggle: false,
    }
  }

  Greeter() {
    var today = new Date()
    var hourNow = today.getHours()

    if (hourNow > 18) {
      return 'Good evening!'
    } else if (hourNow > 12) {
      return 'Good afternoon!'
    } else if (hourNow > 0) {
      return 'Good morning!'
    } else {
      return 'Welcome!'
    }
  }
  render() {
    return (
      <HeaderWrapper>
        <HeaderInner>
          <HeaderContent>
            <Nav />
            <HeaderGreeting>{this.Greeter()}</HeaderGreeting>
            <HeaderTitle>My name's Ste.</HeaderTitle>
            <HeaderCopy>
              I’m a full stack web developer based in Leeds, England. I like to
              make bold, beautiful websites that don’t take themselves too
              seriously.
              <br />
              <br />
              I'm currently rebuilding my site, but if you'd like to get in
              touch get in touch on my social media below!
              <br />
              <br />
              <Links>
                <socialLink href="https://www.twitter.com/stecodes">
                  Twitter
                </socialLink>
                <socialLink href="https://www.dribbble.com/stecodes">
                  Dribbble
                </socialLink>
                <socialLink href="https://www.codepen.com/stecodes">
                  Codepen
                </socialLink>
                <socialLink href="https://www.gihub.com/steoneill">
                  Github
                </socialLink>
              </Links>
            </HeaderCopy>
          </HeaderContent>
        </HeaderInner>
        <Wave />
      </HeaderWrapper>
    )
  }
}

export default header
