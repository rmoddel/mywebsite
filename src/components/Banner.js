import React from 'react'
import { Link } from 'gatsby'

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1>Welcome to MGY!</h1>
            </header>
            <div className="content">
                <p>A Mesivta High School envisioned with your son in mind</p>
                <ul className="actions">
                  <Link to="/contact" className="button next scrolly">Contact Us</Link>
                  <Link to="https://www.rayze.it/mgy2022" className="button next scrolly">RAYZE.IT 2022!!</Link>
                </ul>
            </div>
        </div>

    </section>
)

export default Banner
