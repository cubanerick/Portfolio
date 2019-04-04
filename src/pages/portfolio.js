import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from 'gatsby-image'

const ImageDisplay = styled.div`
  .Wrapper2 {
    display: none;
    transition: ease 0.5s;
  }
    .button{
      border: none;
      outline: none;
      background-color: transparent;
      cursor: pointer;
      transition: ease 0.5s;
      border-radius: 50%;
      margin: 0;
      z-index: 1;
    }
    .button:hover {
        transform: rotate('180deg');
        transition: ease 0.5s;
        animation: rotation 2s infinite linear;
    }
    @keyframes rotation {
        from {
          -webkit-transform: rotate(0deg);
        }
        to {
          -webkit-transform: rotate(359deg);
        }
    }
`;

const click1 = () => {
    document.getElementById(`ImageDisplayWapper1`).classList.toggle('Wrapper2')
}

const click2 = () => {
  document.getElementById(`ImageDisplayWapper2`).classList.toggle('Wrapper2')
}

const click3 = () => {
  document.getElementById(`ImageDisplayWapper3`).classList.toggle('Wrapper2')
}

const click4 = () => {
  document.getElementById(`ImageDisplayWapper4`).classList.toggle('Wrapper2')
}

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

  .work {
    grid-column: 1/3;
    width: 100%;
    display: block;
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
  .symbol {
    text-align: left;
  }
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

const Portfolio = ({data}) => (
  <Layout>
    <SEO 
      title="Erick Echeverria | Portfolio" 
      description='I am a full-stack web developer experienced working with interdisciplinary teams to build high quality websites, that follow best practices, SEO, and responsive design. I have developed, launched, and maintained multiple projects, including setting up Dev-Ops and hosting. I have a passion for writing clean code and continued education in the computer sciences.' 
      author='Erick Echeverria' 
      keywords={[`Portfolio`, `Erick Echeverria`, 'Full Stack Developer, JS Engineer']} 
      lang='EN' 
    />
    <Wrapper>
        <div className='work'>
          <Orange>
            <p className='symbol'>{`</> Sep 2018 - Present`}</p>
            <h3>Ortho Mattress, Inc.</h3>
            <p className='position'>Full Stack Web Developer</p>
          </Orange>

          <h3 style={{marginTop: '20px'}}><a href='https://www.orthomattress.com' >Orthomattress.com</a></h3>
          <h3>Development</h3>
          <ul>
            <li className=''>
              <h6 style={{display: 'inline-block'}}><a href='https://www.orthomattress.com' >Orthomattress.com</a></h6> was developed using React and Next.js to provide server-side rendering. This resulted in a performance benfit for Ortho Mattress customers, and consistent SEO performance. I was the Sole Developer on these projects.
            </li>
            <li className=''>
              Worked closely with the Senior Designer to implement design efforts across the new web platform. A CMS was created using Contentful which allowed for all the traditional CMS features.
            </li>
            <li>
            <h6 style={{display: 'inline-block'}}><a href='https://www.orthomattress.com/stores' >Orthomattress.com/stores</a></h6> is a Location finder for all Ortho Mattress stores using Google Maps Api  
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
          <ImageDisplay>
            <button className='button' onClick={click1}><Img fixed={data.Plus.childImageSharp.fixed} /></button>
            <div className={`Wrapper2`} id={`ImageDisplayWapper1`}>
                <Img style={{marginBottom: '40px'}} fluid={data.OrthoHomePage.childImageSharp.fluid}/>
                <Img style={{marginBottom: '40px'}} fluid={data.OrthoStores.childImageSharp.fluid}/>
            </div>
           </ImageDisplay>

          <h3>Dev-Ops</h3>
          <ul>
            <li>
              Manage Microsoft Azure Resoures and architect cloud platform for the Node.js Web Application.
            </li>
            <li>
              Setup automated SSL certification with Let's Encrypt Extension.
            </li>
            <li>
              Setup and manage an Azure Dev-Ops Project that uses Pipelines (CI/CD service) to release builds from a Github repository.
            </li>
            <li>
              Monitor the Application's and Server's metrics, performance, and traffic to ensure smooth daily operations.
            </li>
          </ul>

          <ImageDisplay>
            <button className='button' onClick={click2}><Img fixed={data.Plus.childImageSharp.fixed} /></button>
            <div className={`Wrapper2`} id={`ImageDisplayWapper2`}>
              <Img style={{marginBottom: '40px'}} fluid={data.AzurePipeline.childImageSharp.fluid}/>
            </div>
           </ImageDisplay>

          <Orange>
            <p className='symbol'>{`</> Aug 2018 - Present`}</p>
            <h3>Beyond The Agency</h3>
            <p className='position'>Full Stack Web Developer</p>
          </Orange>

          <h3 style={{marginTop: '20px'}}><a href='https://www.beyondtheagency.co' >Beyondtheagency.co</a></h3>
          <ul>
            <li className=''>
              <h6 style={{display: 'inline-block'}}><a href='https://www.beyondtheagency.co' >Beyondtheagency.co</a></h6> was developed in conjuction with Beyond the agency's in-house design team to be its online prescence, showcasing the amazing work this agency has to offer.
            </li>
            <li className=''>
              Work closely with the Creative directors to plan UI according to UX considerations.
            </li>
            <li>
              Maintain and update application design.
            </li>
            <li>
              Hosting on Heroku makes monitoring traffic, metrics, and scaling easy for a small agency.
            </li>
          </ul>

          <ImageDisplay>
            <button className='button' onClick={click3}><Img fixed={data.Plus.childImageSharp.fixed} /></button>
            <div className={`Wrapper2`} id={`ImageDisplayWapper3`}>
                <Img style={{marginBottom: '40px', maxWidth: '400px'}} fluid={data.BeyondMobile.childImageSharp.fluid}/>
            </div>
           </ImageDisplay>

          <Orange>
            <p className='symbol'>{`</> Feb 2019 - Mar 2019`}</p>
            <h3>Contract</h3>
            <p className='position'>Full Stack Web Developer</p>
          </Orange>

          <h3 style={{marginTop: '20px'}}><a href='https://www.maureenstapleton.net/' >MaureenStapleton.net</a></h3>
          <ul>
            <li>
              Developed Real Estate Listings pages for prominent Real Estate Agent in Aspen, Colorado.
            </li>
            <li>
              Using Contentful, the site has a CMS where listings can be uploaded and pages made from the listing data.
            </li>
            <li>
              Integrate with third party service idx broker to provide MLS search within the web application. 
            </li>
          </ul>

          <ImageDisplay>
            <button className='button' onClick={click4}><Img fixed={data.Plus.childImageSharp.fixed} /></button>
            <div className={`Wrapper2`} id={`ImageDisplayWapper4`}>
            <Img style={{marginBottom: '40px'}} fluid={data.ContentfulExample.childImageSharp.fluid}/>
            </div>
           </ImageDisplay>

          <Orange>
            <p className='symbol'>{`</>`}</p>
            <h3>Other Projects</h3>
            <p className='position'></p>
          </Orange>

          <h3 style={{marginTop: '20px'}}><a href='http://rifft.herokuapp.com/' >Rift</a></h3>
          <ul>
            <li>
            	Portal for student and teacher discussion boards and pdf note sharing. 
            </li>
            <li>
            	Node.js, Express, JavaScript, React.js, MongoDB, Mongoose, HTML, CSS, Bootstrap 
            </li>
            <li style={{listStyleType: 'none'}}>
              <a href="https://github.com/cubanerick/rift"><Img style={{marginBottom: '40px'}} fixed={data.github.childImageSharp.fixed}/></a>
            </li>
          </ul>

          <h3 style={{marginTop: '20px'}}><a href='http://dry-savannah-57068.herokuapp.com/' >Native Spot</a></h3>
          <ul>
            <li>
            	Native Spot gives users a place to post about anything that is going on in their local area and ask questions about spots that they are unfamiliar with. 
            </li>
            <li>
            	Node.js, Express, JavaScript, MySQL, Sequelize, jQuery, Bootstrap
            </li>
            <li style={{listStyleType: 'none'}}>
              <a href="https://github.com/cubanerick/ask-a-local"><Img style={{marginBottom: '40px'}} fixed={data.github.childImageSharp.fixed}/></a>
            </li>
          </ul>

          <h3 style={{marginTop: '20px'}}><a href='cubanerick.github.io/Around-the-Corner/' >Around the Corner</a></h3>
          <ul>
            <li>
            	A simple way to see what great events are just around the corner in your city. 
            </li>
            <li>
            	JavaScript, jQuery, AJAX, Google Maps JavaScript API, HTML, CSS, Local Storage
            </li>
            <li style={{listStyleType: 'none'}}>
              <a href="github.com/cubanerick/Around-the-Corner"><Img style={{marginBottom: '40px'}} fixed={data.github.childImageSharp.fixed}/></a>
            </li>
          </ul>
        </div>
    </Wrapper>
  </Layout>
)

export const query = graphql`
  query {
    AzurePipeline: file(relativePath: { eq: "Azure_Pipeline.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 991) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    BeyondMobile: file(relativePath: { eq: "BeyondMobile.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    OrthoHomePage: file(relativePath: { eq: "OrthoHomePage.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 991) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    OrthoStores: file(relativePath: { eq: "OrthoStores.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 991) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ContentfulExample: file(relativePath: { eq: "ContentfulExample.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 991) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    github: file(relativePath: { eq: "github.png" }) {
      childImageSharp {
        fixed(quality: 100, width: 89) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    Plus: file(relativePath: { eq: "icons8-pin-in-circle-96.png" }) {
      childImageSharp {
          fixed(quality: 100, width: 75, height: 75) {
          ...GatsbyImageSharpFixed
          }
      }
  }
}`

export default Portfolio
