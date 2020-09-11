// Imports
import React, { Component } from "react";
import styled from "styled-components";
// import About from "./About";
import { NavLink } from "react-router-dom";

// import logo from '../logo.svg';
import "../App.css";

const Navline = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    background: #000;
    transition: 0.4s;
    z-index: 4;
    height: 50px;
    opacity: 0.3;

    a {
        display: inline-block;
        text-align: center;
        // top: 0;
        // position: relative;
        width: 150px;
        // border: 2px solid #fff;
        line-height: 2.5;
        margin: 0 15px 20px 5px;
        height: 50px;
        font-size: 18px;
        color: #000;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: bolder;
        transition: 0.4s;
    }

    a:nth-child(1) {
        background: rgba(65, 131, 215, 1);
        left: 15%;
        position: relative;

        &:hover {
            background: rgba(137, 196, 244, 1);
        }
    }

    a:nth-child(2) {
        background: rgba(137, 196, 244, 1);
        left: 15%;
        position: relative;

        &:hover {
            background: rgba(197, 239, 247, 1);
        }
    }

    a:hover {
        // border: 2px solid #fff;
        // background: #fff;
        // color: #282c34;
    }

    &:hover {
        // background: #fff;
        cursor: pointer;
        opacity: 1;

        a {
            color: ;
        }
    }
`;
// Home Class Component
export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    // this.top = this.top.bind(this);

    top() {
        window.scrollTo(0, 0);
    }

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
                <NavLink onClick={this.top} to="/">
                    Home
                </NavLink>
                <NavLink to="/about">About</NavLink>
                {/* <NavLink to="/work">Work</NavLink> */}
            </Navline>
        );
    }
}
