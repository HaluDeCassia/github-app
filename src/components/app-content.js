import React from 'react';
import PropTypes from 'prop-types';
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Links from './links'

const AppContent = ({ userinfo, repos, starred }) => (
  <div className="App App-header">
    <Search />
    { !!userinfo && <UserInfo userinfo={ userinfo }/> }
    { !!userinfo && <Actions /> }
    { !!repos.length && <Links
      className="repos"
      title="Repositórios: "
      infos={ repos }
    /> }

    { !!starred.length && <Links
      className="Starred"
      title="Favoritos: "
      infos={ starred }
    /> }

  </div>
)

AppContent.propTypes = {
  userinfo: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired,
}
export default AppContent
