import React, {useState, useEffect} from "react";
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [body, setBody] = useState({});
  const [send, setSend] = useState(false);
  const [responseText, setResponseText] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!name || !email || !message)return;
    await setBody({
      name: name,
      reply_to: email,
      message: message
    });
    setSend(true);
    console.log(JSON.stringify(setBody));
  }

  useEffect(() => {
    const url = "https://8eyg21vyih.execute-api.us-east-1.amazonaws.com/dev/static-site-mailer";
    const sendEmail = async () => {
      axios.post(url, {body})
        .then(function (response) {
          setResponseText("Thank you for your message. We look forward to getting in touch with you shortly.");
          setTimeout(setResponseText(''), 7000);
          console.log(response);
        })
        .catch(function (error) {
          setResponseText("Something went wrong with your message. <br/>Please try again shortly, or send us an email.");
          setTimeout(setResponseText(''), 7000);
          console.log(error);
        });
    };
    if(!send)return;
    sendEmail();
  },[send]);
  return (
    <Layout>
      <Helmet>
        <title>Mesivta Gaon Yaakov ~ Contact us page</title>
        <meta name="description" content="Contact Page" />
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
                  {responseText ? <p>{responseText}</p> :
                    <form method="POST" onSubmit={handleSubmit}>
                      <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input required value={name} type="text" name="name" id="name" onChange={(e) => setName(e.target.value)}/>
                      </div>
                      <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input required value={email} type="email" name="reply_to" id="email" onChange={(e) => setEmail(e.target.value)}/>
                      </div>
                      <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea required value={message} name="message" id="message" rows="6" onChange={(e) => setMessage(e.target.value)}/>
                      </div>
                      <ul className="actions">
                        <li><input type="submit" value="Send Message" className="special"/></li>
                        <li><input type="reset" value="Clear"/></li>
                      </ul>
                    </form>}
                </section>
                <section className="split">
                  <section>
                    <div className="contact-method">
                      <span className="icon alt fa-envelope"></span>
                      <h3>Email</h3>
                      <a href="mailto:info@mesivtagaonyaakov.org?Subject=I found your website and would like more information"
                         target="_blank">info@mesivtagaonyaakov.org</a>
                    </div>
                  </section>
                  <section>
                    <div className="contact-method">
                      <span className="icon alt fa-phone"></span>
                      <h3>Phone</h3>
                      <span>732.806.5891</span>
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

export default Contact