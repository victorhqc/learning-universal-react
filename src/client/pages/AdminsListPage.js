import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import map from 'lodash/map';
import fetchAdmins from '../../store/actions/admins';
import withAuth from '../components/hocs/withAuth';

class UsersListPage extends Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }

  renderAdmins() {
    const {
      admins,
    } = this.props;

    return map(admins.list, admin => (
      <li key={admin.id}>{admin.name}</li>
    ));
  }

  render() {
    return (
      <div>
        <h3>Protected list of admins</h3>
        <ul>{this.renderAdmins()}</ul>
      </div>
    );
  }
}

UsersListPage.defaultProps = {
  admins: {
    list: [],
  },
};

UsersListPage.propTypes = {
  admins: PropTypes.shape({
    list: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })),
  }),
  fetchAdmins: PropTypes.func.isRequired,
};

const mapStateToProps = ({ admins }) => ({
  admins,
});

const mapDispatchToProps = {
  fetchAdmins,
};

const loadData = ({ dispatch }) => dispatch(fetchAdmins());

export default {
  loadData,
  component: compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuth,
  )(UsersListPage),
};
