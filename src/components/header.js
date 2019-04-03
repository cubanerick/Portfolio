import { Link, StaticQuery } from "gatsby"
import React from "react"
import styled from 'styled-components'
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Location } from '@reach/router';

const Wrapper = styled.header`
  background-color: transparent;
  padding: 10px;
  width: 100%;
  display: grid;
  display: -ms-grid;
  -ms-grid-columns: 1fr;
  -ms-grid-rows: 1fr 1fr;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;

  .border {
    border-bottom: 3px solid white;
  }
`;

const Title = styled.h2`
  color: white;
  margin: 0;
  outline: none;
`;

const Title2 = styled.h3`
  color: white;
  margin: 0;
  font-size: 18px;
  font-weight: 400;
`;

const IconWrapper = styled.div`
  grid-column: 1/2;
  grid-row: 2;
  display: grid;
  display: -ms-grid;
  -ms-grid-columns: 120px 1fr;
  -ms-grid-rows: 1fr;
  grid-template-columns: 120px 1fr;
  grid-template-rows: 1fr;
`;

const TitleWrapper = styled.div`
  margin: auto 0;
`;

const ImgStyle = {
  borderRadius: '50%'
}

const Routes = styled.div`
  grid-column: 2/3;
  grid-row: 2;
  margin-top: auto;
  padding-bottom: 10px;
`;

const Header = () => (
  <StaticQuery
    query = {graphql`
    query {
      ProfilePic: file(relativePath: { eq: "ErickProfilePic.jpg" }) {
        childImageSharp {
          fixed(quality: 100, width: 89, height: 89) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      linkedinWhite: file(relativePath: { eq: "linkedin-white.jpg" }) {
        childImageSharp {
          fixed(quality: 100, width: 89, height: 89) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }`}

    render = {data =>
      <Wrapper>
        <IconWrapper>
          <Img fixed={data.ProfilePic.childImageSharp.fixed} style={ImgStyle}/>

          <TitleWrapper>

            <Title>
              <Link to="/" style={{textDecoration: 'none', color: 'white'}}>
                Erick Echeverria
              </Link>
            </Title>

            <Title2>
              Full Stack Web Developer
            </Title2>

          </TitleWrapper>
        </IconWrapper>
        <Routes>

          <Location>{({location}) =>
            <Link to="/" className={location.pathname === '/'? 'border': 'noBorder'} style={{textDecoration: 'none', color: 'white', padding: '10px', transition: 'ease 0.5s'}}>
              About
            </Link>
         }</Location>

         <Location>{({location}) =>
            <Link to="/portfolio" className={location.pathname === '/portfolio'? 'border': 'noBorder'} style={{textDecoration: 'none', color: 'white', padding: '10px', transition: 'ease 0.5s'}}>
              Portfolio
            </Link>
          }</Location>

        </Routes>
      </Wrapper>
    }
  />
)
export default Header
