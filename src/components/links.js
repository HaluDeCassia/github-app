import React from 'react';
import PropTypes from 'prop-types';

const Links = ({ className = "", title, infos }) => (
  <div className={ className }>
    <h2>{ title } </h2>
    <ul>
      {infos.map((info, index) => (
        <li key={index}><a target="_blank" rel="noopener noreferrer" className="App-link" href={ info.link } >{ info.name }</a></li>
      ))}
    </ul>
  </div>
)

Links.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  infos: PropTypes.array.isRequired,
}
export default Links
