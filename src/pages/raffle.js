import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const Landing = (props) => {
  return (
    <Layout>
      <Helmet>
        <title>MGY ~ Purim Raffle</title>
        <meta name="description" content="Donate page"/>
        <meta http-equiv="refresh" content={`0; url=https://secure.cardknox.com/mesivtagaonyaakov`} />
      </Helmet>
      <section id="banner" className="style2">
        <div className="inner">
          <header className="major">
            <h1>Purim Raffle</h1>
          </header>
        </div>
      </section>
    </Layout>
  )
}

export default Landing