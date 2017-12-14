import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import map from 'lodash/map';
import fetchUsers from '../../store/actions/users';

class UsersListPage extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    const {
      users,
    } = this.props;

    return map(users.list, user => (
      <li key={user.id}>{user.name}</li>
    ));
  }

  renderHead() {
    const {
      users,
    } = this.props;

    return (
      <Helmet>
        <title>{`${users.list.length} Users Loaded`}</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
    );
  }

  render() {
    return (
      <div>
        {this.renderHead()}
        {'Here\'s a big list of users:'}
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

UsersListPage.defaultProps = {
  users: {
    list: [],
  },
};

UsersListPage.propTypes = {
  users: PropTypes.shape({
    list: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })),
  }),
  fetchUsers: PropTypes.func.isRequired,
};

const mapStateToProps = ({ users }) => ({
  users,
});

const mapDispatchToProps = {
  fetchUsers,
};

const loadData = ({ dispatch }) => dispatch(fetchUsers());

export default {
  loadData,
  component: connect(mapStateToProps, mapDispatchToProps)(UsersListPage),
};
