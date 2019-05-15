import React from 'react';
import PropTypes from 'prop-types'
const Actions = ({ handleRepos, handleStarred }) => (
  <div className="actions">
    <button onClick={ handleRepos } className="App-button">Ver repositórios</button>
    <button onClick={ handleStarred } className="App-button">Ver Favoritos</button>
  </div>
)

Actions.propTypes = {
  handleRepos: PropTypes.func.isRequired,
  handleStarred: PropTypes.func.isRequired
}

export default Actions
