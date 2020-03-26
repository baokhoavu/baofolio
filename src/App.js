import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Nav from './components/Nav';
import { BrowserRouter as BrowserRouter, Route, Switch, Navigation } from "react-router-dom";

export default class App extends Component {

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Nav />
            <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/about" component={About}/>
              <Route path="/work" component={Work}/>
              <Route component={Error}/>
            </Switch>
          </div> 
        </BrowserRouter>
        {/* <Nav /> */}
        {/* <Home /> */}
      </div>
    );
  }
}

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;