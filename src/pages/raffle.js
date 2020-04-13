import React ,{useState, useEffect} from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Confetti from 'react-confetti'
import { window } from 'browser-monads';


function useWindowSize() {
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}
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