import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import SamplePageNav from './components/SamplePageNav';
import './css/App.css';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);
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

          <Route exact path="/" component={Home} />
          <Route path="/samples" component={SamplePageNav} />
        </div>
      </Router>
    );
  }
}

export default App;
