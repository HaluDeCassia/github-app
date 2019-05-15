import React, { Component } from 'react';
// import logo from './logo.svg';
import AppContent from './components/app-content'
import Ajax from '@fdaciuk/ajax'
import './App.css';

class App extends  Component {
  constructor() {
    super()
    this.state = {
      userinfo: null,
      repos:  [],
      starred:  []
    }
  }

  handleSearch (e) {
    let user = e.target.value
    let keyCode = e.which || e.keyCode
    const ENTER = 13
    if (keyCode === ENTER) {
      Ajax().get(`https://api.github.com/users/${ user }`)
      .then((result) => {
        console.log(result);
        this.setState({
          userinfo: {
            username: result.name,
            avatar: result.avatar_url,
            login: result.login,
            repos: result.public_repos,
            followers: result.followers,
            following: result.following
          }
        })
      })
    }
  }

  handleRepos () {
    let user = this.state.userinfo.login
    Ajax().get(`https://api.github.com/users/${ user }/repos`)
    .then((result) => {
      this.setState({
        repos: result
      })
    })
  }

  handleLinks (type) {
    return (e) => {
      let user = this.state.userinfo.login
      Ajax().get(`https://api.github.com/users/${ user }/${ type }`)
      .then((result) => {
        this.setState({
          [type]: result.map((repo) => ({
            id: repo.id,
            name: repo.name,
            link: repo.html_url
          }))
        })
      })
    }
    // userinfo: {
    //   username: "Halú de Cássia",
    //   avatar: "https://avatars1.githubusercontent.com/u/11221993?v=4",
    //   login: "HaluDeCassia",
    //   repos: 3,
    //   followers: 1,
    //   following: 1,
    // },
    // repos:  [{
    //   name: "Repos",
    //   link: "#"
    // }],
    // starred:  [{
    //   name: "Starred",
    //   link: "#"
    // }]
  }

  render () {
    return (
      <AppContent
        userinfo={ this.state.userinfo }
        repos={ this.state.repos }
        starred={ this.state.starred }
        handleSearch={(e) => this.handleSearch(e)}
        handleRepos={ this.handleLinks('repos') }
        handleStarred={ this.handleLinks('starred') }
      />
    );
  }
}

export default App;
