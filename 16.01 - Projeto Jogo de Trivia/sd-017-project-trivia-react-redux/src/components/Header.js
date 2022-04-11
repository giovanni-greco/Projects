import PropTypes from 'prop-types';
import React, { Component } from 'react';
import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
    };
    this.goToRanking = this.goToRanking.bind('this');
  }

  componentDidMount() {
  }

  goToRanking() {

  }

  render() {
    const { isLoading } = this.state;
    const { username, gravatar, player } = this.props;
    const url = md5(gravatar).toString();

    if (isLoading) return <>Carregando...</>;
    return (
      <div>
        <img
          data-testid="header-profile-picture"
          src={ `https://www.gravatar.com/avatar/${url}` }
          alt="profile"
        />

        <p data-testid="header-player-name">
          { username }
        </p>
        <p data-testid="header-score">
          { player.score }
        </p>
        {/* <button
          type="button"
          data-testid="btn-ranking"
          onClick={ this.goToRanking }
        >
          Ranking
        </button> */}
      </div>
    );
  }
}

Header.propTypes = {
  userEmail: PropTypes.any,
  username: PropTypes.any,
}.isRequired;

const mapStateToProps = ({ email, gravatar, username, player }) => ({
  email,
  gravatar,
  username,
  player,
});

export default connect(mapStateToProps, null)(Header);
