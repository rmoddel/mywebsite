import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

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
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Donate</h3>
                                <p>Help Support MGY</p>
                            </header>
                            <a href="https://pay.banquest.com/gaonyaakov" className="link primary"></a>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Staff</h3>
                                <p>Meet the Hanhalah</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Schedule</h3>
                                <p>Daily and Monthly Schedule</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Pictures</h3>
                                <p>Father & Son Learning</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                              <h3>Pictures</h3>
                              <p>Father & Son Learning</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                              <h3>Pictures</h3>
                              <p>Father & Son Learning</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex
