import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import NewsBusiness from './components/newsBusiness'
import NewsSport from './components/newsSport'
import { login } from './components/UserFunctions'
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={NewsBusiness} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/newBusiness" component={NewsBusiness}></Route>
            <Route exact path="/newsSport" component={NewsSport}></Route>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
