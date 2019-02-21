import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import SamplePageNav from './SamplePageNav';
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
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/samples">samples</Link>
                </li>                        
            </ul>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/samples" component={SamplePageNav} />                   
        </div>
      </Router>
    );
  }
}

export default App;
