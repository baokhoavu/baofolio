// Imports
import React, { Component } from "react";
import styled from "styled-components";
import "../App.css";
import ia from "../assets/A.PNG";
import ib from "../assets/B.PNG";
import ic from "../assets/C.PNG";
import cloudImage from "../assets/cloud8bit.png";
import { NavLink, Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import SlideShow from "./Slideshow.js";

// Container
const Body = styled.div`
    // background-color: #282c34;
`;

const Boxcontainer = styled.div`
    width: 500px;

    &:nth-child(1) {
        padding-top: 500px;

        div {
            color: rgba(137, 196, 244, 1);
        }
    }

    &:nth-child(2) {
        z-index: 6;
        padding-bottom: 600px;
        padding-top: 15px;

        div:nth-child(3) a {
            display: block;
            text-align: center;
            width: 150px;
            border: 2px solid #fff;
            line-height: 2.5;
            margin: 5px 0 20px 5px;
            height: 50px;
            font-size: 18px;
            color: #fff;
            -webkit-text-decoration: none;
            text-decoration: none;
            text-transform: uppercase;
            font-weight: bolder;
            -webkit-transition: 0.4s;
            transition: 0.4s;
            letter-spacing: 1px;

            &:hover {
                background: #fff;
                color: rgb(28, 4, 59);
            }
        }
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

        &:hover {
            cursor: pointer;
        }
    }

    div a {
        color: #fff;
        text-decoration: none;
    }
`;

// First Row
const Box = styled.div`
    text-align: left;
    // height: 140px;
    font-family: "Arial", monospace, "times new roman";
    font-size: 2em;
    transition: 0.75s;
    position: relative;

    &:hover {
        background: #09d3d8;
        color: #282c34;
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

    // div:last {
    //     color: red;
    // }

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

    > div {
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

const Image = styled.a`
    display: block;
    height: 400px;
    width: 90%;
    margin: 2.5% auto;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transition-delay: 75ms;
    z-index: 7;
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    &.a {
        background-image: url("${ia}");
    }

    &.b {
        background-image: url("${ib}");
    }

    &.c {
        background-image: url("${ic}");
    }

    // &:hover {
    //     opacity: 0.5;
    // }
`;

const BackWhite = styled.div`
    background: #fff;
    display: block;
    height: 400px;
    width: 90%;
    margin: 2.5% auto;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transition-delay: 75ms;
    z-index: 7;
    position: relative;
`;

const Copy = styled.div`
    width: 100% !important;

    h2 {
        display: block;
        text-align: left;
        margin: 0 30px;
        font-size: 30px;
    }
`;

const TitleBox = styled.div`
    width: 100%;
    min-width: 1280px;
    padding-bottom: 150px;
    margin: 25px 25px 50px;
    position: relative !important;
    // border: 2px solid rgba(101, 44, 138, 1);
    // background: linear-gradient(
    //     135deg,
    //     rgba(48, 43, 127, 1) 0%,
    //     rgba(48, 43, 127, 1) 28%,
    //     rgba(101, 44, 138, 1) 73%,
    //     rgba(101, 44, 138, 1) 98%
    // );

    > div {
        width: 100%;
    }

    @media screen and (min-width: 1280px) {
        min-width: 1280px;
    }

    @media screen and (min-width: 1920px) {
        min-width: 1920px;
    }
`;

const TestBox = styled.div`
    width: 100%;
    min-height: 800px;
    min-width: 1280px;
    padding-bottom: 250px;
    margin: 25px 25px 250px;
    display: flex !important;
    flex-wrap: wrap;
    position: relative !important;
    // border: 2px solid rgba(101, 44, 138, 1);
    // background: linear-gradient(
    //     135deg,
    //     rgba(48, 43, 127, 1) 0%,
    //     rgba(48, 43, 127, 1) 28%,
    //     rgba(101, 44, 138, 1) 73%,
    //     rgba(101, 44, 138, 1) 98%
    // );

    div {
        flex: 0 0 33.333333%;
        width: 33%;
        position: relative;
        flex: 0 0 50%;

        @media screen and (min-width: 768px) {
            flex: 0 0 33.333333%;
        }
    }

    @media screen and (min-width: 1280px) {
        min-width: 1280px;
    }

    @media screen and (min-width: 1920px) {
        min-width: 1920px;
    }
`;

const HoverText = styled.p`
    position: relative;
    top: 11px;
    background: #fff;
    min-height: 379px;
    opacity: 0;

    &:hover,
    &.hover {
        display: block;
        opacity: 0.5;
    }
`;

const ModalBox = styled.div`
    min-height: 800px;
    min-width: 1268px;
    display: none;
    background: #fff;
    position: fixed !important;
    overflow: visible;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 25;

    &.click {
        display: block;
    }

    &:hover {
        cursor: pointer;
    }

    &.unclick {
        display: none;
    }

    @media screen and (min-width: 1300px) {
        width: 60%;
    }
`;

const ModalContainer = styled.div`
    height: 100vh;
    display: none;
    position: fixed !important;
    z-index: 24;

    width: 100vw !important;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &.click {
        display: block;
    }

    &:hover {
        cursor: pointer;
    }

    &.unclick {
        display: none;
    }
`;

const Linkable = styled.div`
    width: 160px !important;
    min-height: 40px;
    position: relative !important;
    border: 2px solid rgba(108, 122, 137, 1);
    margin-bottom: 20px;
    transition: 0.4s;

    &:hover {
        background: rgba(108, 122, 137, 1);

        a {
            color: #fff !important;
        }
    }

    a {
        position: relative !important;
        bottom: 6px;
        color: rgba(108, 122, 137, 1) !important;
        font-weight: bold;
        font-size: 16px;
    }

    a:hover {
        color: #fff;
    }
`;
//  Home Class Component
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
            field: null,
            hover: false,
            modalA: false,
        };

        this.hover = this.hover.bind(this);
        this.listenToScroll = this.listenToScroll.bind(this);
        this.openModalA = this.openModalA.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.modalA = this.modalA.bind(this);
        this.myDivToFocus = React.createRef();
    }

    componentDidMount() {
        // console.log("hi");
    }

    listenToScroll = () => {
        // console.log("testerr"); const winScroll =     document.body.scrollTop ||
        // document.documentElement.scrollTop; const height =
        // document.documentElement.scrollHeight -
        // document.documentElement.clientHeight; const scrolled = winScroll / height;
        // this.setState({ position: scrolled }); console.log(this.state.position);
        // .current is verification that your element has rendered
        if (this.myDivToFocus.current) {
            this.myDivToFocus.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
            });
        }
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
    }

    hoverB() {
        this.setState((prevHover) => ({ hover: prevHover.hover }));

        console.log(this.hover);
    }

    openModalA() {
        this.setState(() => ({ modalA: true }));
    }

    closeModal() {
        this.setState(() => ({ modalA: false }));
    }

    modalA() {
        console.log("we have liftoff");
        this.setState(() => ({ modalA: true }));
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
                                    Baokhoa Vu
                                </Box>
                            </Boxcontainer>

                            <Boxcontainer>
                                <Comment>
                                    Lead Developer [ Based in Los Angeles ]
                                </Comment>

                                <Comment>
                                    <p>(626) 367-3112</p>
                                    <p>baokhoadinhvu@gmail.com</p>
                                </Comment>
                                <Comment>
                                    <NavLink
                                        to="#work"
                                        onClick={this.listenToScroll}
                                    >
                                        Work
                                    </NavLink>
                                </Comment>
                            </Boxcontainer>

                            {/* Live Events */}
                            <Interactivecontainer>
                                <div></div>
                                <Clouds>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </Clouds>
                                <TitleBox>
                                    <div>
                                        <h2>Projects</h2>
                                    </div>
                                </TitleBox>
                                <TestBox
                                    className={
                                        "test a" +
                                        (this.state.animate ? "slide" : null)
                                    }
                                    id="work"
                                    ref={this.myDivToFocus}
                                    onMouseEnter={this.listenToScroll}
                                >
                                    <div>
                                        <Image className="a">
                                            <HoverText
                                                onMouseEnter={this.hoverb}
                                                onMouseLeave={this.hoverb}
                                                onClick={this.openModalA}
                                                className={
                                                    this.state.hovered
                                                        ? "hovered"
                                                        : null
                                                }
                                            ></HoverText>
                                        </Image>
                                        <Copy>Ride Toronto 2020</Copy>
                                    </div>
                                    <div>
                                        <Image className="b">
                                            <HoverText
                                                onMouseEnter={this.hoverb}
                                                onMouseLeave={this.hoverb}
                                                className={
                                                    this.state.hovered
                                                        ? "hovered"
                                                        : null
                                                }
                                            ></HoverText>
                                        </Image>
                                        <Copy>Ride Toronto 2020</Copy>
                                    </div>
                                    <div>
                                        <Image
                                            className="a"
                                            href="http://ride.conquercancer.ca/toronto20"
                                        ></Image>
                                    </div>
                                </TestBox>
                                <ModalBox
                                    onClick={this.modalA}
                                    className={
                                        this.state.modalA ? "click" : "unclick"
                                    }
                                >
                                    <SlideShow></SlideShow>
                                    <div className="slide-descrip">
                                        <div>
                                            <h2>Ride Toronto 2020</h2>
                                        </div>
                                        <div>
                                            <Linkable>
                                                <a href="https://ride.conquercancer.ca/toronto20">
                                                    View Website
                                                </a>
                                            </Linkable>
                                        </div>
                                        <div>
                                            <p>
                                                Wordpress, Liquid, Sage, Ajax,
                                                Api, Scheduler, vanilla jS,
                                                Scss, jQuery, php, Blackbaud
                                                Luminate, Convio
                                            </p>
                                            <p className="copy">
                                                Full multi-page website built
                                                into a reuseable template
                                                pulling and saving preservable
                                                data. Incorporating custom
                                                functionality and responsive
                                                designs, we help promote
                                                existing and new resources
                                                offered. Data is represented
                                                using live api intergration with
                                                custom rules based on requests.
                                            </p>
                                        </div>
                                    </div>
                                </ModalBox>
                                <ModalContainer
                                    onClick={this.closeModal}
                                    className={
                                        this.state.modalA ? "click" : "unclick"
                                    }
                                ></ModalContainer>
                            </Interactivecontainer>
                        </header>
                    </div>
                </Body>
            </div>
        );
    }
}
