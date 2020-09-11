import React, { Component } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import ParticleComponent from "./components/ParticleComponent";
import houses from "./assets/house.svg";

const Background = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 1;
    background: transparent;

    > div {
        height: 100%;
    }
`;

const Container = styled.div`
    // z-index: 5;
    // position: relative;
`;

const Houses = styled.div`
    //   bottom: -55px;
    left: 0;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 0;
    bottom: -50px;
    background: transparent;

    div {
        background-image: url(${houses});
        background-size: cover;
        background-position: center bottom;
        width: 100%;
        height: 100%;
        position: absolute;
    }

    //   &:hover {

    //   }
`;

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            animate: 1,
            position: 0,
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.listenToScroll);
    }

    componentWillUnmount() {
        // window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        this.setState({ animate: 0 });
    }

    listenToScroll = () => {
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;

        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const scrolled = winScroll / height;

        this.setState({ position: scrolled });
    };

    render() {
        return (
            <div>
                <BrowserRouter basename={"/"}>
                    <div>
                        <Background>
                            <ParticleComponent />
                        </Background>
                        <Nav />
                        <Container>
                            <Switch>
                                <Route path="/" component={Home} exact />
                                <Route path="/about" component={About} />
                                <Route path="/work" component={Work} />
                                <Route component={Error} />
                            </Switch>
                        </Container>
                        {/* <Houses className={this.state.animate ? "slide" : ""}>
                            <div
                                alt="abc"
                                onError="this.style.display='none'"
                            />
                        </Houses> */}
                    </div>
                </BrowserRouter>
                {/* <Nav /> */}
                {/* <Home /> */}
            </div>
        );
    }
}

// import React from 'react'; import logo from './logo.svg'; import './App.css';
// function App() {   return (     <div className="App">       <header
// className="App-header">         <img src={logo} className="App-logo"
// alt="logo" />         <p>           Edit <code>src/App.js</code> and save to
// reload.         </p>         <a           className="App-link"
// href="https://reactjs.org"           target="_blank"           rel="noopener
// noreferrer"         >           Learn React         </a>       </header>
// </div>   ); } export default App;
