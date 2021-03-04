import React from 'react'
import {Link} from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import rabbicohen from '../assets/images/cohen.jpg'
import comingSoon from '../assets/images/coming-soon.jpg'
//import pic10 from '../assets/images/pic10.jpg'

const Landing = (props) => (
  <Layout>
    <Helmet>
      <title>Landing - Forty by HTML5 UP</title>
      <meta name="description" content="Landing Page"/>
    </Helmet>

    <section id="banner" className="style2">
      <div className="inner">
        <header className="major">
          <h1>Staff</h1>
          <div className="content">
            <p>Almost complete...</p>
          </div>
        </header>
      </div>
    </section>
    <div id="main">
      <section id="two" className="spotlights">
        {[
          {id: 1, name: 'Rabbi Chaim Cohen', position: 'Rosh Yeshiva', img: rabbicohen},
          {id: 2, name: 'Rabbi Dovid Aschkenasy', position: 'Mashpai/Senior Advisor', img: ''},
          {id: 3, name: 'Rabbi Moshe Mermelstein', position: 'Menahel', img: ''},
          {id: 4, name: 'Rabbi Feivy Schreiber',position: '10th grade Magid Shiur',img: ''},
          {id: 5, name: 'Rabbi Yaakov Kopel Keller',position: '11th grade Magid Shiur',img: ''},
          {id: 6, name: 'Rabbi Shalom Rosenfeld', position: '9th grade Magid Shiur ~ 2nd Seder', img: ''},
          {id: 7, name: 'Rabbi Raphael Fried',position: '10th grade Magid Shiur ~ 2nd Seder',img: ''},
          {id: 8, name: 'Rabbi Raphael Fried',position: '10th grade Magid Shiur ~ 2nd Seder',img: ''},
          {id: 9, name: 'Rabbi Avrohom Moshe Neirenberg',position: '10th grade Magid Shiur ~ Halacha Seder',img: ''},
          {id: 10,name: 'Rabbi Shmuel   Gugenheimer',position: '9th grade Magid Shiur ~ Halacha Seder',img: ''},
          {id: 11,name: 'Rabbi Dovid Berger',position: 'Engish Principal ~ Limudie Chol',img: ''},
          {id: 12,name: 'Rabbi Heshy Horovitz',position: 'Administrator',img: ''}].map(rebbe => {
          return (
            <section key={rebbe.id}>
              <Link to="/staff" className="image">
                <img src={rebbe.img ? rebbe.img : comingSoon} alt=""/>
              </Link>
              <div className="content">
                <div className="inner">
                  <header className="major">
                    <h3>{rebbe.name} ~ {rebbe.position}</h3>
                  </header>
                  <p>כל ישראל יש להם חלק לעולם הבא<br/> שנאמר ועמך כולם צדיקים לעולם יירשו ארץ<br/> נצר מטעי מעשה ידי
                    להתפאר</p>
                  <ul className="actions">
                    <li><Link to="/staff" className="button">Bio coming soon</Link></li>
                  </ul>
                </div>
              </div>
            </section>
          )
        })}
      </section>
    </div>

  </Layout>
)

export default Landing