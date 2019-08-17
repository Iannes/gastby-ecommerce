import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SuccessPage = () => (
  <Layout>
    <SEO title="Success page" />
    <h1>Thanks for your purchase!</h1>    
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SuccessPage
