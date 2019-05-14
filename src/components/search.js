import React from 'react';
import Ajax from '@fdaciuk/ajax'

const Search = () => (
  <header>
    <div className="search">
      <input
        className="App-form"
        type="search"
        placeholder="Digite o usuário"
        onKeyUp={(e) => {
          let user = e.target.value
          let keyCode = e.which || e.keyCode
          const ENTER = 13
          if (keyCode === ENTER) {
            Ajax().get(`https://api.github.com/users/${ user }`)
            .then((result) => {
              console.log(result);
            })
          }
        }}
      />
    </div>
  </header>
)
export default Search
