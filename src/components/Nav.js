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

    a {
        display: block;
        text-align: center;
        width: 150px;
        border: 2px solid #09d3ac;
        line-height: 2.5;
        height: 50px;
        color: #09d3ac;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: bolder;
    }

    &:hover {
        background: #09d3ac;
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
