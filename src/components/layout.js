import React from "react"
import Header from "./header"
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { StaticQuery } from "gatsby"
import { graphql } from "gatsby"
import Img from 'gatsby-image'

const Footer = styled.footer`
  position: relative;
  bottom: 0;
  padding: 10px;
  text-align: right;
  width: 100%;
  background-color: #113255;
`;

const P = styled.p`
  margin: 0;
  padding: 10px;
  color: white;
`;
const Main = styled.main`
  max-width: 991px;
  margin: 0 auto;
  padding: 20px;
`;

const Wrapper = styled.div`
  background-color: #FCF9EE;
  
  .HeaderBackground:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to top right, rgba(240, 101, 67), #1D3461);
    opacity: 0.7;
    z-index: -1;
  }
`;


const Layout = ({ children}) => (
  <StaticQuery query={graphql`
      query {
        desktop: file(relativePath: { eq: "IMG_1064.JPG" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        linkedin: file(relativePath: { eq: "linkedin-white.png" }) {
          childImageSharp {
            fixed(quality: 100, width: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <Wrapper>
          <BackgroundImage 
            Tag="section"
            className='HeaderBackground'
            fluid={imageData}
            backgroundColor={'rgba(240, 101, 67, 0.45)'}
          >
            <Header/>
          </BackgroundImage>
          <div>
            <Main>{children}</Main>
            <Footer>
              <a href='https://www.linkedin.com/in/erick-echeverria'><Img fixed={data.linkedin.childImageSharp.fixed} /></a>
            <p><a href='mailto:erick@codeoperators.com'>erick@codeoperators.com</a></p>
            <P> © {new Date().getFullYear()}, Built with{` `}<a href="https://www.gatsbyjs.org">Gatsby</a></P>
            </Footer>
          </div>
        </Wrapper>
      )}
    }
  />
)

export default Layout
