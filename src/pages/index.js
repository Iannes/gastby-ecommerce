import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  let stripe;
  React.useEffect(() => {
    stripe = window.Stripe('pk_test_TjJD5X46mkfls5nniBnukN7Y00kJkXR8Qh');
    return;
  });

  const handleSubmit = e => {
    e.preventDefault();
    stripe.redirectToCheckout({
      items: [{sku: 'sku_FdqUslp9O4sexR', quantity: 1}],

      successUrl: 'http://localhost:8000/success',
      cancelUrl: 'http://localhost:8000/canceled',
    })
    .then(function (result) {
      if (result.error) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer.
        const displayError = document.getElementById('error-message');
        displayError.textContent = result.error.message;
      }
    });
  }
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Buy Trainers</h1>
      <article id="error-message"></article>
      <form onSubmit={handleSubmit}>

      <button style={{background: 'rebeccapurple', color: 'white', borderRadius:'5px', padding: '5px 15px'}} type="submit">Buy Now!</button>    
      </form>
    </Layout>
  )
}


export default IndexPage
