import React from 'react'
import { Link } from 'gatsby'

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1>Welcome to MGY!</h1>
                <Link to="/raffle" className="button next scrolly">Pesach Raffle Winners</Link>
            </header>
            <div className="content">
                <p>A Mesivta High School envisioned with your son in mind</p>
                <ul className="actions">
                  <Link to="/contact" className="button next scrolly">Contact Us</Link>
                </ul>
            </div>
        </div>

    </section>
)

export default Banner
