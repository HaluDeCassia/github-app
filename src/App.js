import React, { Component } from 'react';
// import logo from './logo.svg';
import AppContent from './components/app-content'
import './App.css';

class App extends  Component {
  constructor() {
    super()
    this.state = {
      userinfo: {
        username: "Halú de Cássia",
        avatar: "https://avatars1.githubusercontent.com/u/11221993?v=4",
        login: "HaluDeCassia",
        repos: 3,
        followers: 1,
        following: 1,
      },
      repos:  [{
        name: "Repos",
        link: "#"
      }],
      starred:  [{
        name: "Starred",
        link: "#"
      }]
    }
  }

  render () {
    return (
      <AppContent
        userinfo={ this.state.userinfo }
        repos={ this.state.repos }
        starred={ this.state.starred }
      />
    );
  }
}

export default App;
