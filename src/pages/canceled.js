import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CancelPage = () => (
  <Layout>
    <SEO title="Cancel page" />
    <h1>There was a problem with your purchase. Please try again :/</h1>    
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default CancelPage
