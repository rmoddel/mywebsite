import React, {useState, useEffect} from "react";
import axios from "axios";


const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [postData, setPostData] = useState({});
  const [send, setSend] = useState(false);
  const [responseText, setResponseText] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await setPostData({
      name: name,
      reply_to: email,
      message: message
    });
    setSend(true);
    console.log(JSON.stringify(setPostData));
  }

  useEffect(() => {
    const url = "https://8eyg21vyih.execute-api.us-east-1.amazonaws.com/dev/static-site-mailer";
    const sendEmail = async () => {
      axios.post(url, {postData})
        .then(function (response) {
          setResponseText("Thank you for your message. We look forward to getting in touch with you shortly.");
          console.log(response);
        })
        .catch(function (error) {
          setResponseText("Something went wrong with your message. Please try again shortly, or send us an email.");
          console.log(error);
        });
    };
    if(!send)return;
    sendEmail();
  },[send]);

  return (
    <section id="contact">
      <div className="inner">
        <section>
          {responseText ? <p>{responseText}</p> :
            <form method="POST" onSubmit={handleSubmit}>
              <div className="field half first">
                <label htmlFor="name">Name</label>
                <input value={name} type="text" name="name" id="name" onChange={(e) => setName(e.target.value)}/>
              </div>
              <div className="field half">
                <label htmlFor="email">Email</label>
                <input value={email} type="email" name="reply_to" id="email" onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea value={message} name="message" id="message" rows="6" onChange={(e) => setMessage(e.target.value)}/>
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
  )
}

export default Contact
