import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo from './logo';

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Link to="/">
        <Logo />
      </Link>
      <ul
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          listStyleType: 'none',
          margin: 'auto 0',
        }}
      >
        <li style={{ marginRight: '2em' }}>About</li>
        <li style={{ marginRight: '2em' }}>Work</li>
        <li style={{ marginRight: '2em' }}>Notes</li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
