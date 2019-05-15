import React from 'react';
import PropTypes from 'prop-types';
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Links from './links'

const AppContent = ({ userinfo, repos, starred, handleSearch, handleRepos, handleStarred }) => (
  <div className="App App-header">
    <Search handleSearch={ handleSearch }/>
    { !!userinfo && <UserInfo userinfo={ userinfo }/> }
    { !!userinfo && <Actions
      handleRepos={ handleRepos }
      handleStarred = { handleStarred }
    /> }

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
  userinfo: PropTypes.object,
  repos: PropTypes.array,
  starred: PropTypes.array,
}
export default AppContent
