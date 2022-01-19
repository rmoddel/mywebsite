import React from "react";
import Map from './googleMap';

export default () => <section id="contact">
      <div className="inner">
        <section>
          <Map/>
        </section>
        <section className="split">
          <section>
            <div className="contact-method">
              <span className="icon alt fa-envelope"></span>
              <h3>Email</h3>
              <a href="mailto:info@mesivtagaonyaakov.org?Subject=I found your website and would like more information"
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
