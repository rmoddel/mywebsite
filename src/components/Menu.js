import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/contact">Contact Us</Link></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://pay.banquest.com/gaonyaakov">Donate</a></li>
                <li><Link onClick={props.onToggleMenu} to="/staff">Staff</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/schedule">Schedule</Link></li>
                {/*<li><Link onClick={props.onToggleMenu} to="/elements">About Us</Link></li>*/}
            </ul>
            {/*<ul className="actions vertical">*/}
                {/*<li><span href="#" className="button special fit">Get Started</span></li>*/}
                {/*<li><span href="#" className="button fit">Log In</span></li>*/}
            {/*</ul>*/}
        </div>
        <div className="close" onClick={props.onToggleMenu}>Close</div>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu

