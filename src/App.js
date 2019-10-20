import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';


function App() {
  return (
    <Router>
      {/* <Nav></Nav> */}
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </Router>
  );
}

export default App;
