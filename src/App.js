import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Nav from './components/Nav';
import { BrowserRouter as BrowserRouter, Route, Switch } from "react-router-dom";
import styled from 'styled-components';
import ParticleComponent from "./components/ParticleComponent";

const Background = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
    background: transparent;

    > div {
        height: 100%;
    }
`

const Container = styled.div`
    // z-index: 5;
    // position: relative;
`

export default class App extends Component {

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Background>
              <ParticleComponent />
            </Background>
            <Nav />
            <Container>
              <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/about" component={About}/>
                <Route path="/work" component={Work}/>
                <Route component={Error}/>
              </Switch>
            </Container>
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