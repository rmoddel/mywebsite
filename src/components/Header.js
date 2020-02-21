import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import icon from '../assets/images/mgy-logo-white.png'

const Header = (props) => (
    <header id="header" className="alt">
        <Link to="/" className="logo"><img height={100} src={icon}/></Link>
        <nav>
            <a className="menu-link" onClick={props.onToggleMenu} >Menu</a>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
