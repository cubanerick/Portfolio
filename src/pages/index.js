import React from "react"
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

  .col1 {
    grid-column: 1;
  }
  .col2 {
    grid-column: 2;
  }
  .col3 {
    grid-column: 3;
  }

  .work {
    grid-column: 1/3;
    width: 100%;
    display: block;
  }
  .skillImg {
    font-size: 13px;
    padding: 10px;
    margin: auto;
    width: 100px;
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
      <p><LargeText>I</LargeText> am a Full-stack web developer experienced working with interdisciplinary teams building and implementing dynamic end-to-end web applications that are fast, integrated, reliable, and engaging , and follow the latest SEO practices and design patterns. I have developed, launched, and maintained multiple projects, including Dev-Ops Management and IT Administration. I have a passion for writing clean code and continued education in the computer sciences.</p>
    </div>
    <Wrapper>
    <h2 className='title'>Tech Stack</h2>
      <div className='grid1'>
        <div className='col1 skillImg'><Img fluid={data.HTML.childImageSharp.fluid}/><p className='displayNone'>HTML</p></div>
        <div className='col2 skillImg'><Img fluid={data.CSS.childImageSharp.fluid}/><p className='displayNone'>CSS</p></div>
        <div className='col3 skillImg'><Img fluid={data.JS.childImageSharp.fluid}/><p className='displayNone'>Javascript</p></div>
        <div className='col1 skillImg'><Img fluid={data.React.childImageSharp.fluid}/><p className='displayNone'>React</p></div>
        <div className='col2 skillImg'><Img fluid={data.NodeJS.childImageSharp.fluid}/><p className='displayNone'>Node</p></div>
        <div className='col3 skillImg'><Img fluid={data.GraphQL.childImageSharp.fluid}/><p className='displayNone'>GraphQL</p></div>
        <div className='col1 skillImg'><Img fluid={data.NextJS.childImageSharp.fluid}/><p className='displayNone'>Next.js</p></div>
        <div className='col2 skillImg'><Img fluid={data.Gatsby.childImageSharp.fluid}/><p className='displayNone'>Gatsby</p></div>
        <div className='col3 skillImg'><Img fluid={data.Git.childImageSharp.fluid}/><p className='displayNone'>Git</p></div>
        <div className='col1 skillImg'><Img fluid={data.Azure.childImageSharp.fluid}/><p className='displayNone'>Azure</p></div>
        <div className='col2 skillImg'><Img fluid={data.mongodb.childImageSharp.fluid}/><p className='displayNone'>MongoDB</p></div>
        <div className='col3 skillImg'><Img fluid={data.mysql.childImageSharp.fluid}/><p className='displayNone'>MySQL</p></div>
      </div>

      <div className='grid2'>
        <h2>Education</h2>
        <div className='education'>
          <h3>UCLA Extension</h3>
          <iframe frameBorder="0" title='UCLA Extension | Full Stack Web Development Bootcamp Certificate' scrolling="no" src="https://uclaextension.credly.com/embed.html#/?member_badge_id=15115246" width="180" height="230"></iframe>

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
