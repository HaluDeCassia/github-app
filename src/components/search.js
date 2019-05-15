import React from 'react';
import PropTypes from 'prop-types'

const Search = ({ handleSearch }) => (
  <header>
    <div className="search">
      <input
        className="App-form"
        type="search"
        placeholder="Digite o usuário"
        onKeyUp={ handleSearch }
      />
    </div>
  </header>
)

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired
}
export default Search
