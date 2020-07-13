import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import hotelPic from '../assets/images/mgy-hotel-pic.jpg'

class HomeIndex extends React.Component {
    render() {
      return (
        <Layout>
          <Helmet
            title="Mesivta Gaon Yaakov"
            meta={[
              { name: 'description', content: 'An amazing Frum Jewish boys high school for awesome, smart, bright and energetic boys with an emphasis on bringing out the best in every student' },
              { name: 'keywords', content: 'High School, Mesivta,Yeshiva, Jewish, New, Premier, great amazing ,awesome, caring, boys, young men, torah, gemara, mussar ,halacha, ice skating, paint ball, fun, trips' },
            ]}
          >
          </Helmet>

          <Banner />

          <div id="main">
            <section id="one" className="tiles">
              {[{section : 'Donate', tag : 'Help Support MGY', pic : pic02, link : '/donate' },
                {section : 'Staff', tag : 'Meet the Hanhalah', pic : hotelPic, link : '/staff' },
                {section : 'Schedule', tag : 'Daily and Monthly Schedule', pic : pic04, link : '/schedule' },
                {section : 'Pictures', tag : 'Father & Son Learning', pic : pic03, link : '/' }
                ].map(i => <article key={i.section} style={{backgroundImage: `url(${i.pic})`}}>
                <header className="major">
                  <h3>{i.section}</h3>
                  <p>{i.tag}</p>
                </header>
                <Link to={i.link} className="link primary"></Link>
              </article>)
              }
            </section>
          </div>

        </Layout>
      )

    }
}

export default HomeIndex
