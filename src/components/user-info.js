import React from 'react';
import PropTypes from 'prop-types';

const UserInfo = ({ userinfo }) => (
  <div className="user-info">

    <img alt="Foto do Usuário" src={ userinfo.avatar } />
    <h1><a className="App-link" target="_blank" rel="noopener noreferrer" href={ `https://github.com/${userinfo.login}` }>{ userinfo.username }</a></h1>

    <ul>
      <li> Repositórios: { userinfo.repos }</li>
      <li> Seguidores: { userinfo.followers }</li>
      <li> Seguindo: { userinfo.following }</li>
    </ul>

  </div>
)

UserInfo.propTypes = {
  userinfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
  })
}

export default UserInfo
