import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from 'gatsby-image'
import { graphql } from "gatsby"

const Wrapper = styled.div`
  color: #113255;
  margin-top: 40px;
  display: grid;
  display: -ms-grid;
  -ms-grid-columns: 400px 1fr;
  grid-template-columns: 400px 1fr;


  .grid1 {
    max-width: 300px;
    /* padding-top: 40px; */
    /* width: 100%; */
    display: grid;
    display: -ms-grid;
    -ms-grid-columns: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    -ms-grid-rows: 125px 125px 125px 125px 125px;
    grid-template-rows: 125px 125px 125px 125px 125px;
  }
  @media only screen and (max-width: 767px) {
    -ms-grid-columns: 100%;
    grid-template-columns: 100%;

    div.grid2 {
      grid-column: 1;
      max-width: 991px;
    }
    div.education {
      margin: 0 auto;
      max-width: 991px;
      text-align: center;
    }
    div.work {
      margin: 0 auto;
      text-align: center;
    }
    div.grid1 {
      margin: 0 auto;
    }
    ul {
      list-style-type: none;
    }
  }
  .grid2 {
    grid-column: 2;
  }

  .HTML {
    padding: 10px;
    margin: auto;
    width: 100px;
    grid-column: 1;
  }
  .CSS {
    padding: 10px;
    margin: auto;
    width: 100px;
    grid-column: 2;
  }
  .JS {
    padding: 10px;
    margin: auto;
    width: 100px;
    grid-column: 3;
  }
  .React {
    padding: 10px;
    margin: auto;
    width: 100px;
    grid-column: 1;
  }
  .NodeJS {
    padding: 10px;
    margin: auto;
    width: 100px;
    grid-column: 2;
  }
  .NextJS {
    padding: 10px;
    margin: auto;
    width: 100px;
    grid-column: 1;
  }
  .GraphQL {
    padding: 10px;
    margin: auto;
    width: 100px;
    grid-column: 3;
  }
  .Git {
    padding: 10px;
    margin: auto;
    width: 100px;
    grid-column: 3;
  }
  .Azure {
    padding: 10px;
    margin: auto;
    width: 100px;
    grid-column: 1;
  }
  .Gatsby {
    padding: 10px;
    margin: auto;
    width: 100px;
    grid-column: 2;
  }
  .Heroku {
    padding: 10px;
    margin: auto;
    width: 100px;
    grid-column: 2;
  }
  .mysql {
    padding: 10px;
    margin: auto;
    width: 100px;
    grid-column: 3;
  }
  .mongodb {
    padding: 10px;
    margin: auto;
    width: 100px;
    grid-column: 2;
  }
  .work {
    grid-column: 1/3;
    width: 100%;
    display: block;
  }
  .skillImg {
    font-size: 13px;
  }
  .skillImg:hover {
    transition: ease 0.6s;
    cursor: pointer;
    p{
      color: #113255;
      transition: ease 0.6s;
    }
  }
  .displayNone {
    color: #FCF9EE;
  }
  p {
    margin: 0;
    padding: 5px;
  }
  .title {
    grid-column: 1/4;
    margin: 0;
  }
  .schoolLogo {
    width: 80px;
  }
  ul {
    text-decoration: none;
    padding: 0;
  }
  .ListTitle {
    font-weight: 700;
    color: #113255; 
    /* list-style-type: none; */
    margin: 0;
    padding: 0;
  }
  a {
    color: #113255;
    transition: ease 0.5s;
  }
  a:hover {
    color: rgba(240, 101, 67);
    transition: ease 0.5s;
  }
`;

const LargeText = styled.span`
  font-size: 48px;
  float: left;
  line-height: 1;
  padding-right: 20px;
  padding-left: 10px;
`;
const Orange = styled.div`
  background-color: rgba(240, 101, 67, 0.7);
  padding: 10px;
  display: block;
  h3 {
    text-align: right;
    margin: 0;
  }
  .position {
    text-align: right;
  }
  .symbol {
    font-size: 20px;
  }
`;

const IndexPage = ({data}) => (
  <Layout>
    <SEO 
      title="Erick Echeverria | Full Stack Web Developer" 
      description='I am a full-stack web developer experienced working with interdisciplinary teams to build high quality websites, that follow best practices, SEO, and responsive design. I have developed, launched, and maintained multiple projects, including setting up Dev-Ops and hosting. I have a passion for writing clean code and continued education in the computer sciences.' 
      author='Erick Echeverria' 
      keywords={[`Portfolio`, `Erick Echeverria`, 'Full Stack Developer, JS Engineer']} 
      lang='EN' 
    />
    <div style={{color: '#113255', paddingTop: '80px'}}>
      <p><LargeText>I</LargeText> am a full-stack web developer experienced working with interdisciplinary teams to build high quality websites, that follow best practices, SEO, and responsive design. I have developed, launched, and maintained multiple projects, including setting up Dev-Ops and hosting. I have a passion for writing clean code and continued education in the computer sciences.</p>
    </div>
    <Wrapper>
    {/* <h2 style={{gridColumn: '1/3'}}>Work Experience</h2>
        <div className='work'>
          <Orange>
            <p className='symbol'>{`</> Sep 2018 - Present`}</p>
            <h3>Ortho Mattress, Inc.</h3>
            <p className='position'>Full Stack Web Developer- Sole Developer</p>
          </Orange>

          <h3><a href='httpD://www.orthomattreDs.com' target='_blank'>Orthomattress.com</a></h3>
          <ul>
            <li className=''>
              <h6 style={{display: 'inline-block'}}><a href='https://www.orthomattress.com' target='_blank'>Orthomattress.com</a></h6> was developed using React and Next.js to provide server-side rendering. This resulted in a performance benfit for Ortho Mattress customers, and consistent SEO performance.
            </li>
            <li className=''>
              Worked closely with the Senior Designer to implement design efforts across the new web platform. A CMS was create using Contentful which allowing for all the traditional CMS features.
            </li>
            <li>
            <h6 style={{display: 'inline-block'}}><a href='https://www.orthomattress.com/stores' target='_blank'>Orthomattress.com/stores</a></h6> is a Location finder for all Ortho Mattress stores using Google Maps Api  
            </li>
            <li>
             Programatically created server-side rendered location pages from location data.
            </li>
            <li>
              Create and maintain implementation of marketing tools such as Google Tags and Facebook pixels, and maintain the highest SEO. 
            </li>
            <li>
              Cooperate with third party services and API's to increase website functionality.
            </li>
          </ul>
        </div> */}
    <h2 className='title'>Tech Stack</h2>
      <div className='grid1'>
        <div className='HTML skillImg'><Img fluid={data.HTML.childImageSharp.fluid}/><p className='displayNone'>HTML</p></div>
        <div className='CSS skillImg'><Img fluid={data.CSS.childImageSharp.fluid}/><p className='displayNone'>CSS</p></div>
        <div className='JS skillImg'><Img fluid={data.JS.childImageSharp.fluid}/><p className='displayNone'>Javascript</p></div>
        <div className='React skillImg'><Img fluid={data.React.childImageSharp.fluid}/><p className='displayNone'>React</p></div>
        <div className='NodeJS skillImg'><Img fluid={data.NodeJS.childImageSharp.fluid}/><p className='displayNone'>Node</p></div>
        <div className='GraphQL skillImg'><Img fluid={data.GraphQL.childImageSharp.fluid}/><p className='displayNone'>GraphQL</p></div>
        <div className='NextJS skillImg'><Img fluid={data.NextJS.childImageSharp.fluid}/><p className='displayNone'>Next.js</p></div>
        <div className='Gatsby skillImg'><Img fluid={data.Gatsby.childImageSharp.fluid}/><p className='displayNone'>Gatsby</p></div>
        <div className='Git skillImg'><Img fluid={data.Git.childImageSharp.fluid}/><p className='displayNone'>Git</p></div>
        <div className='Azure skillImg'><Img fluid={data.Azure.childImageSharp.fluid}/><p className='displayNone'>Azure</p></div>
        <div className='Heroku skillImg'><Img fluid={data.Heroku.childImageSharp.fluid}/><p className='displayNone'>Heroku</p></div>
        <div className='mysql skillImg'><Img fluid={data.mysql.childImageSharp.fluid}/><p className='displayNone'>MySQL</p></div>
        <div className='mongodb skillImg'><Img fluid={data.mongodb.childImageSharp.fluid}/><p className='displayNone'>MongoDB</p></div>
      </div>

      <div className='grid2'>
        <h2>Education</h2>
        <div className='education'>
          <h3>UCLA Extension</h3>
          <iframe frameBorder="0" scrolling="no" src="https://uclaextension.credly.com/embed.html#/?member_badge_id=15115246" width="180" height="230"></iframe>

          <Img className='schoolLogo' fluid={data.ASU.childImageSharp.fluid}/>
          <h3>Arizona State University</h3>
          <p>Post-Bachelor Studies - Mathematics and Computer Science</p>
          <p>2016 – 2018</p>

          <Img className='schoolLogo' fluid={data.UF.childImageSharp.fluid}/>
          <h3>University of Florida</h3>
          <p>Bachelor of Arts - Environmental Science</p>
          <p>2013 – 2015</p>
        </div>
      </div>
    </Wrapper>
  </Layout>
)

export const query = graphql`
  query {
    mysql: file(relativePath: { eq: "mysql2.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 991) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mongodb: file(relativePath: { eq: "mongodb.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 991) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    UF: file(relativePath: { eq: "florida_gators_football.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 991) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ASU: file(relativePath: { eq: "asu_sparky.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 991) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Heroku: file(relativePath: { eq: "Heroku.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 991) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Azure: file(relativePath: { eq: "Azure-2.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 991) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Gatsby: file(relativePath: { eq: "gatsby-icon1.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 991) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Git: file(relativePath: { eq: "Git-Icon1.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 991) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    GraphQL: file(relativePath: { eq: "GraphQL_Logo.svg.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 991) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    HTML: file(relativePath: { eq: "HTML5.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 991) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    CSS: file(relativePath: { eq: "CSS3.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 991) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    JS: file(relativePath: { eq: "JS.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 991) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    NextJS: file(relativePath: { eq: "nextjs_icon.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 991) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    NodeJS: file(relativePath: { eq: "nodejs-new-pantone-black.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 991) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    React: file(relativePath: { eq: "React.js_logo-512.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 991) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }`

export default IndexPage
