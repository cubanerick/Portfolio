import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO 
      title="Erick Echeverria | 404 Page" 
      description='I am a full-stack web developer experienced working with interdisciplinary teams to build high quality websites, that follow best practices, SEO, and responsive design. I have developed, launched, and maintained multiple projects, including setting up Dev-Ops and hosting. I have a passion for writing clean code and continued education in the computer sciences.' 
      author='Erick Echeverria' 
      keywords={[`Portfolio`, `Erick Echeverria`, 'Full Stack Developer, JS Engineer']} 
      lang='EN' 
    />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
