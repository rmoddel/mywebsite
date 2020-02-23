import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import icon from '../assets/images/mgy-website-logo-white.png'

const Header = (props) => (
    <header id="header" className="alt">
        <Link to="/" className="logo"><img src={icon} alt=""/></Link>
        <nav>
            <span className="a menu-link" onClick={props.onToggleMenu} >Menu</span>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
