// Imports
import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import logo from '../logo.svg';
import '../App.css';

const Navline = styled.div`
    background: #fff;
    width: 2px;
    height: 70vh;
    display: inline;
    position: fixed;
    left: 23%;
    top: 15%;

`
// Home Class Component
export default class Home extends Component {

    render() {
        return (
            <Navline>
                <Link to="/about">About</Link>
            </Navline>
        )
    }
}
