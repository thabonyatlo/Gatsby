// (4) Step 1: Import React
import * as React from 'react'
// (7)
import { Link } from 'gatsby'
// (15)
import Layout from '../components/layout'

// Step 2: Define your component
const AboutPage = () => {
  return (
    // <main>
    //   <title>About Me</title>
    //   <h1>About Me</h1>
    //   {/* (8) */}<Link to="/">Back to Home</Link>
    //   <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    // </main>
    // (16)
    // (17)
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}

// Step 3: Export your component
export default AboutPage