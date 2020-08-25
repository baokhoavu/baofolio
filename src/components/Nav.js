// Imports
import React, { Component } from "react";
import styled from "styled-components";
// import About from "./About";
import { NavLink } from "react-router-dom";

// import logo from '../logo.svg';
import "../App.css";

const Navline = styled.div`
  position: fixed;
  left: 10px;
  top: 10px;
  transition: 0.4s;
  z-index: 4;
  // background: #000;
  // heigth: 100vh;

  a {
    display: block;
    text-align: center;
    width: 150px;
    border: 2px solid #fff;
    line-height: 2.5;
    margin: 5px 0 20px 5px;
    height: 50px;
    font-size: 18px;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bolder;
    transition: 0.4s;
  }

  a:hover {
    border: 2px solid #fff;
    background: #fff;
    color: #282c34;
  }

  &:hover {
    // background: #fff;
    cursor: pointer;

    a {
      color: ;
    }
  }
`;
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
        <NavLink to="/about">About</NavLink>
        <NavLink to="/work">Work</NavLink>
      </Navline>
    );
  }
}
