import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav>
    <Link to="/">Universal React</Link>
  </nav>
);

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps)(Header);
