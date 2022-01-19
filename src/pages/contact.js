import React from "react";
import Helmet from 'react-helmet'
import Map from '../components/googleMap'
import Layout from '../components/layout'

const Contact = () => {
  return (
    <Layout>
      <Helmet>
        <title>Mesivta Gaon Yaakov ~ Contact us page</title>
        <meta name="description" content="Contact Page"/>
      </Helmet>

      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h1>Contact Us</h1>
            </header>
            <section id="contact">
              <div className="inner">
                <section>
                  <Map/>
                </section>
                <section className="split">
                  <section>
                    <div className="contact-method">
                      <span className="icon alt fa-envelope"></span>
                      <h3>Email</h3>
                      <a
                        href="mailto:info@mesivtagaonyaakov.org?Subject=I found your website and would like more information"
                        target="_blank" rel="noopener noreferrer">info@mesivtagaonyaakov.org</a>
                    </div>
                  </section>
                  <section>
                    <div className="contact-method">
                      <span className="icon alt fa-phone"></span>
                      <h3>Phone</h3>
                      <span>
                        <a href="tel:1-732-226-8988">1.732.226.8988</a>
                      </span>
                    </div>
                  </section>
                  <section>
                    <div className="contact-method">
                      <span className="icon alt fa-fax"></span>
                      <h3>Fax</h3>
                      <span>720-247-5057</span>
                    </div>
                  </section>
                  <section>
                    <div className="contact-method">
                      <span className="icon alt fa-home"></span>
                      <h3>Address</h3>
                      <span>72 White Road<br />
                        Lakewood NJ, 08701<br />
                        United States of America</span>
                    </div>
                  </section>
                </section>
              </div>
            </section>

          </div>
        </section>
      </div>

    </Layout>
  )
}

export default Contact;
