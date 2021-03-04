import React  from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import banner from '../assets/images/202WON_banner.jpg'

const Landing = (props) => {
  return (
    <Layout>
      <Helmet>
        <title>WIN HUGE ~ 202WON!!</title>
        <meta name="description" content="WIN HUGE ~ 202WON!! | MGY RAFFLE"/>
      </Helmet>
      <section id="banner" className="style2">
        <div className="inner">
          <header style={{textAlign:"center", marginTop : -60}}>
            <a target="_blank" rel="noopener noreferrer" href="https://pay.banquest.com/gaonyaakovraffle"><img src={banner} alt=""/></a>
          </header>
        </div>
      </section>
    </Layout>
  )
}

export default Landing