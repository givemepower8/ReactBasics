import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import HomePage from './components/HomePage'
import SamplesPage from './components/SamplesPage'
import './css/App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu>
            <Menu.Item as={Link} to="/">
              Home
            </Menu.Item>
            <Menu.Item as={Link} to="/samples">
              Samples
            </Menu.Item>
          </Menu>

          <Route exact path="/" component={HomePage} />
          <Route path="/samples" component={SamplesPage} />
        </div>
      </Router>
    )
  }
}

export default App
