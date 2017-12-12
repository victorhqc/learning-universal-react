import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const NavigationHeader = styled.nav`
    display: flex;
    margin-bottom: 20px;
    background: #00a896;
    padding: 10px;
    box-shadow: 0 -1px 5px 0px #222;


    a {
        text-decoration: none;
        color: white;
    }
`;

const NavigationList = styled.ul`
    display: flex;
    list-style: none;
    text-decoration: none;
    padding: 0;
    margin: 0;
`;

const NavigationItem = styled.li`
    margin: 0 10px;
`;

const Header = ({ auth }) => {
  const authButton = auth.isAuthenticated ? (
    <a href="/api/logout">Logout</a>
  ) : (
    <a href="/api/auth/google">Login</a>
  );

  return (
    <NavigationHeader role="navigation">
      <Link to="/">Universal React</Link>
      <NavigationList>
        <NavigationItem>
          <Link to="/users">Users</Link>
        </NavigationItem>
        <NavigationItem>
          <Link to="/admins">Admins</Link>
        </NavigationItem>
        <NavigationItem>
          {authButton}
        </NavigationItem>
      </NavigationList>
    </NavigationHeader>
  );
};

Header.propTypes = {
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.bool,
  }).isRequired,
};

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps)(Header);
