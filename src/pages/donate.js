import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const Landing = (props) => {
  return (
    <Layout>
      <Helmet>
        <title>MGY ~ Donate</title>
        <meta name="description" content="Donate page"/>
        <meta http-equiv="refresh" content={`0; url=https://pay.banquest.com/gaonyaakov`} />
      </Helmet>
      <section id="banner" className="style2">
        <div className="inner">
          <header className="major">
            <h1>Donate</h1>
          </header>
        </div>
      </section>
    </Layout>
  )
}

export default Landing