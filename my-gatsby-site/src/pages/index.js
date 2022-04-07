// Step 1: Import React
import * as React from 'react'
// (5)
import { Link } from 'gatsby'
// (12)
import Layout from '../components/layout'
// (27)
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    // <main>
    //   <title>Home Page</title>
    //   <h1>Welcome to my Gatsby site!</h1>
    //   {/* (6) */}<Link to="/about">About</Link>
    //   <p>I'm making this by following the Gatsby Tutorial.</p>
    // </main> 
    // (13)
    // (14)
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>

      {/* (28)<StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      /> */}
      {/* (29) */}
      <StaticImage
        alt="James Gatsby"
        src="../images/Gatsby.webp"
      />
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage