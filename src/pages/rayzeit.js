import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const Landing = (props) => {
  return (
    <Layout>
      <Helmet>
        <title>MGY ~ Rayze.it Campaign 2022</title>
        <meta name="description" content="Donate page"/>
        <meta http-equiv="refresh" content={`0; url=https://www.rayze.it/mgy2022/rmoddel`} />
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
