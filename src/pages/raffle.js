import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

const Landing = (props) => {
  const { width, height } = useWindowSize();
  return (
    <Layout>
      <Helmet>
        <title>MGY ~ Purim Raffle</title>
        <meta name="description" content="Raffle page"/>
      </Helmet>
      <section id="banner" className="style2">
        <div className="inner">
          <header className="major">
            <h1>Pesach Raffle:     And the Winners are.....</h1>
            <h3>The Shaitel: Moshe Kramer | The Package: Dovy Pinter</h3>
            The Raffle may be over, but you can still donate: <button><a href="/donate">Donate</a></button>
              <Confetti
                width={width}
                height={height}
              />
          </header>
        </div>
      </section>
    </Layout>
  )
}

export default Landing