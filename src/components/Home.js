// Imports
import React, { Component } from 'react';
import styled from 'styled-components';
import '../App.css';
import { NavLink, BrowserRouter as Link } from "react-router-dom";

// Container
const Body = styled.div `
    // background-color: #282c34;
`

const Boxcontainer = styled.div`
    width: 500px;

    &:nth-child(2) {
        z-index: 6;
    }
`

const Interactivecontainer = styled.div`
    width: 500px;
    transition: .75s;

    div {
        width: 25%;
        position: absolute;
        transition: .75s;
        overflow: hidden;
    }

    div p {
        text-align: left;
        font-size: 20px;
        letter-spacing: 2px;
    }

    div a {
        color: #fff;
        text-decoration: none;
    }

    // Music Box
    // div:nth-of-type(1) {
    //     width: 100%;
    //     height: 100%;
    //     display: block;
    //     position: absolute;
    //     opacity: 0.7;
    //     top: 0;
    //     background: rebeccapurple;
    // }

    // Work Box
    div:nth-of-type(2) {
        // background: blue;
        height: 90vh;
        position: absolute;
        left: -100vw;
        top: 5%;

        &.active {
            left: 7.5% !important;
        }
    }

    // Resume Box
    div:nth-of-type(3) {
        background: red;
        height: 0;
        position: absolute;
        top: 39%;
        right: 8%;

        &.active {
            // display: block !important;
            height: 500px;
        }
    }

    // Contact Box
    div:nth-of-type(4) {
        height: 0;

        &.active {
            // display: block !important;
            height: 500px;
        }
    }
`

// First Row
const Box = styled.div`
    border-left: 2px solid #0c547d;
    border-bottom: 2px solid #0c547d;
    // padding: 20px;
    width: 230px;
    height: 140px;
    line-height: 1.9;
    font-family: 'Space Mono', monospace, 'Arial';
    font-size: 2em;
    transition: .75s;
    position: relative;
    
    &:hover {
        background: #09D3D8;
        color: #282c34;
    }
`

// Responsive Horizontal Line
const Hline = styled.div`
    height: 2px;
    width: 0;
    background: #09D3D8;
    transition: 0.25s;

    &.active {
        width: 100%;
    }
`
// Responsive Vertical Line
const Vline = styled.div`
    width: 2px;
    background: #09D3D8;
    height: 1%;
    float: right;
    transition: 0.25s;

    &.active {
        background: #09D3D8;
        // height: 100%;
    }
`

// Copy
const Comment = styled.p`
    font-size: 24px;
    text-align: left;

    a {
        color: #0c547d;
        font-weight: bold;
        text-decoration: none;
    }

    a:hover {
        color: #09D3D8;
        text-decoration: underline;
    }
`

// Clickables
const Linkable = styled.a`
    padding: 0 5px;
    transition: 0.5s;

    &:nth-of-type(1) {
        padding-left: 0;
    }

    &:hover {
        cursor: pointer;
        // letter-spacing: 2px;
    }
`

// Home Class Component
export default class Home extends Component {
    constructor(props) {
        super(props);

        // Hover Variable
        this.state = {
            active: false,
            a: false,
            b: false,
            c: false,
            timer: null
        }

        this.hover = this.hover.bind(this)
    }

    // Hover functionality
    hover(e) {

        // if ( e.target.className)
        console.log(e.target.className)

        if (e.target.className.indexOf('box') > -1) {
            this.setState({
                active: !this.state.active
            })
        }   else if (e.target.className.indexOf('bee') > -1) {
            this.setState({
                b: true
            })
            this.state.timer = setTimeout(() => {
                this.setState({
                    b: false
                })
            }, 5000)
        }   else if (e.target.className.indexOf('cee') > -1) {
            this.setState({
                c: true
            })
            this.state.timer = setTimeout(() => {
                this.setState({
                    c: false
                })
            }, 5000)
        }   else if (e.target.className.indexOf('dee') > -1) {
            this.setState({
                d: true
            })
            this.state.timer = setTimeout(() => {
                this.setState({
                    d: false
                })
            }, 5000)
        }  
        
        // else if (e.target.className.indexOf('deedee') > -1) {
        //     clearTimeout(this.state.timer)
        //     console.log('hi')
        // }
    }

    render() {
        return (
            <div>
                <Body>
                    <div className="App">
                        <header className="App-header">
                            <Boxcontainer>

                                {/* Box Hover */}
                                <Box className='box' onMouseEnter={this.hover} onMouseLeave={this.hover}>
                                
                                    {/* Horizontal Line */}
                                    <Hline className={this.state.active ? 'active' : null }></Hline>
                                
                                    Bao
                                
                                    {/* Vertical Line */}
                                    <Vline className={this.state.active ? 'active' : null }></Vline>

                                </Box>

                            </Boxcontainer>

                            <Boxcontainer>
                                
                                <Comment>
                                    Full Stack - Web Developer ( Los Angeles )
                                </Comment>

                                <Comment>
                                    <Linkable>
                                        <NavLink to="/about">About</NavLink>
                                    </Linkable>
                                </Comment>

                                <Comment>
                                    <Linkable>
                                        <NavLink to="/work">Work</NavLink>
                                    </Linkable>
                                </Comment>

                                <Comment>
                                    <p>
                                        (626) 367-3112
                                    </p>
                                    <p>
                                        {/* <a href="mailto:baokhoadinhvu@gmail.com">baokhoadinhvu@gmail.com</a> */}
                                        baokhoadinhvu@gmail.com
                                    </p>
                                    <p>
                                        {/* <a href="https://www.linkedin.com/in/baokhoadvu/">Baokhoa</a>  */}
                                    </p>
                                </Comment>

                            </Boxcontainer>
                            
                            {/* Live Events */}
                            <Interactivecontainer>
                                <div></div>
                                <div className={'bee ' + (this.state.b ? 'active' : null )}>
                                    {/* <Projects></Projects>
                                    <Projects></Projects>
                                    <Projects></Projects> */}
                                    <p>
                                        <img height="300" width="auto" src="https://cdn.britannica.com/45/5645-050-B9EC0205/head-treasure-flower-disk-flowers-inflorescence-ray.jpg" />
                                        <br />
                                        <a href="#">Flowers</a>
                                        <br />
                                        ReactJS - Redux - Express - Mongodb
                                    </p>
                                    <p>
                                        <img height="300" width="auto" src="https://cdn.britannica.com/45/5645-050-B9EC0205/head-treasure-flower-disk-flowers-inflorescence-ray.jpg" />
                                        <br />
                                        <a href="#">Flowers</a>
                                        <br />
                                        ReactJS - Redux - Express - Mongodb
                                    </p>
                                    <p>
                                        <img height="300" width="auto" src="https://cdn.britannica.com/45/5645-050-B9EC0205/head-treasure-flower-disk-flowers-inflorescence-ray.jpg" />
                                        <br />
                                        <a href="#">Flowers</a>
                                        <br />
                                        ReactJS - Redux - Express - Mongodb
                                    </p>
                                </div>
                                <div className={'cee ' + (this.state.c ? 'active' : null )}>
                                </div>
                                <div onMouseEnter={this.hover} className={'deedee ' + (this.state.d ? 'active' : null )}>
                                    <p>
                                        Phone - (626) 367-3112
                                    </p>
                                    <p>
                                        Email - <a href="mailto:baokhoadinhvu@gmail.com">baokhoadinhvu@gmail.com</a>
                                    </p>
                                    <p>
                                        Linkedin - <a href="https://www.linkedin.com/in/baokhoadvu/">Baokhoa</a> 
                                    </p>
                                </div>
                            </Interactivecontainer>
                        </header>
                    </div>
                </Body>
            </div>
        )
    }
}
