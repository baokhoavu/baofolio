// Imports
import React, { Component } from "react";
import styled from "styled-components";
import "../App.css";
import cloudImage from "../assets/cloud8bit.png";

// Container
const Body = styled.div`
    // background-color: #282c34;
`;

const Boxcontainer = styled.div`
    width: 500px;

    &:nth-child(1) {
        padding-top: 500px;
    }

    &:nth-child(2) {
        z-index: 6;
        padding-bottom: 600px;
    }
`;

const Interactivecontainer = styled.div`
    //   width: 500px;
    transition: 0.75s;

    div {
        width: 25%;
        position: absolute;
        transition: 0.75s;
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
        // background: red;
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
`;

// First Row
const Box = styled.div`
    border-left: 2px solid #0c547d;
    border-bottom: 2px solid #0c547d;
    // padding: 20px;
    width: 230px;
    height: 140px;
    line-height: 1.9;
    font-family: "Space Mono", monospace, "Arial";
    font-size: 2em;
    transition: 0.75s;
    position: relative;

    &:hover {
        background: #09d3d8;
        color: #282c34;
    }
`;

// Responsive Horizontal Line
const Hline = styled.div`
    height: 2px;
    width: 0;
    background: #09d3d8;
    transition: 0.25s;

    &.active {
        width: 100%;
    }
`;
// Responsive Vertical Line
const Vline = styled.div`
    width: 2px;
    background: #09d3d8;
    height: 1%;
    float: right;
    transition: 0.25s;

    &.active {
        background: #09d3d8;
        // height: 100%;
    }
`;

// Copy
const Comment = styled.div`
    font-size: 24px;
    text-align: left;

    a {
        color: #0c547d;
        font-weight: bold;
        text-decoration: none;
    }

    a:hover {
        color: #09d3d8;
        text-decoration: underline;
    }
`;

const Clouds = styled.div`
    width: 100%;
    min-height: 300px;
    display: block !important;
    position: relative !important;

    // z-index: 2;
    // background: #c9dbe9;
    // background: -webkit-linear-gradient(top, #c9dbe9 0%, #fff 100%);
    // background: -linear-gradient(top, #c9dbe9 0%, #fff 100%);
    // background: -moz-linear-gradient(top, #c9dbe9 0%, #fff 100%);

    min-width: 1280px;
    margin: 0 auto;

    div {
        // background: transparent !important;
        background-image: url(${cloudImage}) !important;
        background-size: cover;
        background-position: center bottom;
        width: 100%;
        height: 100%;
        max-width: 200px;
        max-height: 110px;
        margin: 0 50px;
        // position: absolute;
    }

    > div:nth-child(1) {
        position: absolute;
        left: 0 !important;
        animation: MoveSide 3s linear infinite;
        -moz-animation: MoveSide 3s linear infinite;
        -webkit-animation: MoveSide 3s linear infinite;
        -ms-animation: MoveSide 3s linear infinite;
        -o-animation: MoveSide 3s linear infinite;
    }

    > div:nth-child(2) {
        position: absolute;
        left: 400px !important;
        top: 15% !important;
        animation: MoveSide 3.5s linear infinite;
        -moz-animation: MoveSide 3.5s linear infinite;
        -webkit-animation: MoveSide 3.5s linear infinite;
        -ms-animation: MoveSide 3.5s linear infinite;
        -o-animation: MoveSide 3s linear infinite;
    }

    > div:nth-child(3) {
        position: absolute;
        left: 800px !important;
        height: 100% !important;
        top: 5% !important;
        animation: MoveSide 2s linear infinite;
        -moz-animation: MoveSide 2s linear infinite;
        -webkit-animation: MoveSide 2s linear infinite;
        -ms-animation: MoveSide 2s linear infinite;
        -o-animation: MoveSide 2s linear infinite;
    }

    @keyframes MoveSide {
        0% {
            transform: translateX(30px);
        }
        50% {
            transform: translateX(0px);
        }
        100% {
            transform: translateX(30px);
        }
    }

    @keyframes MoveSideB {
        0% {
            transform: translateX(45px);
        }
        50% {
            transform: translateX(15px);
        }
        100% {
            transform: translateX(45px);
        }
    }

    @keyframes MoveSideC {
        0% {
            transform: translateX(60px);
        }
        50% {
            transform: translateX(3px);
        }
        100% {
            transform: translateX(60px);
        }
    }

    @media screen and (max-width: 1280px) {
        min-width: 760px;
    }
`;

const TestBox = styled.div`
    width: 100%;
    min-height: 500px;
    min-width: 1280px;
    margin: 25px;
    display: block !important;
    position: relative !important;
    background: linear-gradient(
        135deg,
        rgba(48, 43, 127, 1) 0%,
        rgba(48, 43, 127, 1) 28%,
        rgba(101, 44, 138, 1) 73%,
        rgba(101, 44, 138, 1) 98%
    );

    &.test {
        opacity: 0;
    }

    &.test:hover {
        opacity: 1;
    }
`;

// Clickables const Linkable = styled.a`   padding: 0 5px;   transition: 0.5s;
// &:nth-of-type(1) {     padding-left: 0;   }   &:hover {     cursor: pointer;
// // letter-spacing: 2px;   } `; Home Class Component
export default class Home extends Component {
    constructor(props) {
        super(props);

        // Hover Variable
        this.state = {
            active: false,
            a: false,
            b: false,
            c: false,
            timer: null,
        };

        this.hover = this.hover.bind(this);
        this.listenToScroll = this.listenToScroll.bind(this);
    }

    componentDidMount() {
        // console.log("hi");
        this.listenToScroll();
    }

    listenToScroll = () => {
        console.log("testerr");

        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;

        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const scrolled = winScroll / height;

        this.setState({ position: scrolled });

        console.log(this.state.position);
    };

    // Hover functionality
    hover(e) {
        // if ( e.target.className)
        console.log(e.target.className);

        if (e.target.className.indexOf("box") > -1) {
            this.setState({
                active: !this.state.active,
            });
        } else if (e.target.className.indexOf("bee") > -1) {
            this.setState({ b: true });
            this.state.timer = setTimeout(() => {
                this.setState({ b: false });
            }, 5000);
        } else if (e.target.className.indexOf("cee") > -1) {
            this.setState({ c: true });
            this.state.timer = setTimeout(() => {
                this.setState({ c: false });
            }, 5000);
        } else if (e.target.className.indexOf("dee") > -1) {
            this.setState({ d: true });
            this.state.timer = setTimeout(() => {
                this.setState({ d: false });
            }, 5000);
        }

        // else if (e.target.className.indexOf('deedee') > -1) {
        // clearTimeout(this.state.timer)     console.log('hi') }
    }

    render() {
        return (
            <div>
                <Body>
                    <div className="App">
                        <header className="App-header">
                            <Boxcontainer>
                                <Box
                                    className="box"
                                    onMouseEnter={this.hover}
                                    onMouseLeave={this.hover}
                                >
                                    <Hline
                                        className={
                                            this.state.active ? "active" : null
                                        }
                                    ></Hline>
                                    Bao
                                    <Vline
                                        className={
                                            this.state.active ? "active" : null
                                        }
                                    ></Vline>
                                </Box>
                            </Boxcontainer>

                            <Boxcontainer>
                                <Comment>
                                    Full Stack - Web Developer ( Los Angeles )
                                </Comment>

                                <Comment>
                                    <p>(626) 367-3112</p>
                                    <p>baokhoadinhvu@gmail.com</p>
                                </Comment>
                            </Boxcontainer>

                            {/* Live Events */}
                            <Interactivecontainer>
                                <div></div>
                                <div
                                    className={
                                        "bee " +
                                        (this.state.b ? "active" : null)
                                    }
                                >
                                    <p>
                                        <img
                                            height="300"
                                            width="auto"
                                            src="https://cdn.britannica.com/45/5645-050-B9EC0205/head-treasure-flower-disk-flowers-inflorescence-ray.jpg"
                                        />
                                        <br />
                                        <a href="#">Flowers</a>
                                        <br />
                                        ReactJS - Redux - Express - Mongodb
                                    </p>
                                    <p>
                                        <img
                                            height="300"
                                            width="auto"
                                            src="https://cdn.britannica.com/45/5645-050-B9EC0205/head-treasure-flower-disk-flowers-inflorescence-ray.jpg"
                                        />
                                        <br />
                                        <a href="#">Flowers</a>
                                        <br />
                                        ReactJS - Redux - Express - Mongodb
                                    </p>
                                    <p>
                                        <img
                                            height="300"
                                            width="auto"
                                            src="https://cdn.britannica.com/45/5645-050-B9EC0205/head-treasure-flower-disk-flowers-inflorescence-ray.jpg"
                                        />
                                        <br />
                                        <a href="#">Flowers</a>
                                        <br />
                                        ReactJS - Redux - Express - Mongodb
                                    </p>
                                </div>
                                <div
                                    className={
                                        "cee " +
                                        (this.state.c ? "active" : null)
                                    }
                                ></div>
                                <div
                                    onMouseEnter={this.hover}
                                    className={
                                        "deedee " +
                                        (this.state.d ? "active" : null)
                                    }
                                >
                                    <p>Phone - (626) 367-3112</p>
                                    <p>
                                        Email -{" "}
                                        <a href="mailto:baokhoadinhvu@gmail.com">
                                            baokhoadinhvu@gmail.com
                                        </a>
                                    </p>
                                    <p>
                                        Linkedin -{" "}
                                        <a href="https://www.linkedin.com/in/baokhoadvu/">
                                            Baokhoa
                                        </a>
                                    </p>
                                </div>
                                <Clouds>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </Clouds>
                                <TestBox
                                    className={
                                        "test a" +
                                        (this.state.animate ? "slide" : null)
                                    }
                                    onMouseEnter={this.listenToScroll}
                                >
                                    <h2>TEST</h2>
                                </TestBox>
                                <TestBox>
                                    <h2>TEST</h2>
                                </TestBox>
                                <TestBox>
                                    <h2>TEST</h2>
                                </TestBox>
                                <TestBox>
                                    <h2>TEST</h2>
                                </TestBox>
                            </Interactivecontainer>
                            {/* <TestBox>
                <h2>TEST</h2>
              </TestBox>
              <TestBox>
                <h2>TEST</h2>
              </TestBox>
              <TestBox>
                <h2>TEST</h2>
              </TestBox>
              <TestBox>
                <h2>TEST</h2>
              </TestBox>
              <TestBox>
                <h2>TEST</h2>
              </TestBox> */}
                        </header>
                    </div>
                </Body>
            </div>
        );
    }
}
