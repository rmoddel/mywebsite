import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
/*import Loadable from 'react-loadable'*/

//import Calendar from '../components/googleCalendar'

/*const LoadableCallendar = Loadable({
    loader: () => {import('../components/googleCalendar')},
    loading() {
      return <div>Loading...</div>
    },
})*/
const Landing = (props) => (
  <Layout>
    <Helmet>
      <title>MGY ~ Schedule</title>
      <meta name="description" content="schedule page"/>
    </Helmet>
    <section id="banner" className="style2">
      <div className="inner">
        <header className="major">
          <h1>Schedule</h1>
          <h2>We're almost finished getting the calendar ready for you!</h2>
        </header>
      </div>
    </section>
    <div id="main">
      <section id="two" className="spotlights">
        <section>
          <div style={{width: '80%', margin: 'auto'}}>

            {/*<LoadableCallendar/>*/}
          </div>
        </section>
      </section>
    </div>

  </Layout>
)

export default Landing