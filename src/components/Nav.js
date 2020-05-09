// Imports
import React, { Component } from 'react';
import styled from 'styled-components';
import About from './About';
import { NavLink, BrowserRouter as Link } from "react-router-dom";

// import logo from '../logo.svg';
import '../App.css';

const Navline = styled.div`


    position: fixed;
    left: 10px;
    top: 10px;
    transition: 0.4s;
    z-index: 4;

    a {
        display: block;
        text-align: center;
        width: 150px;
        border: 2px solid #0c547d;
        line-height: 2.5;
        height: 50px;
        color: #0c547d;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: bolder;
    }

    &:hover {
        background: #0c547d;
        cursor: pointer;

        a {
            color: #282c34;
        }
    }
`
// Home Class Component
export default class Home extends Component {

    render() {
        return (
            <Navline>
                {/* <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                </ul> */}
                <NavLink to="/">Home</NavLink>
            </Navline>
        )
    }
}
