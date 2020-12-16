// Imports
import React, { Component } from "react";
import styled from "styled-components";
import "../App.css";
import ia from "../assets/A.PNG";
import ib from "../assets/B.PNG";
import ic from "../assets/C.PNG";
import id from "../assets/D.PNG";
import ie from "../assets/N.PNG";
import ig from "../assets/O.PNG";
import igg from "../assets/P.PNG";
import ih from "../assets/Q.PNG";
import ii from "../assets/R.PNG";
import cloudImage from "../assets/cloud8bit.png";
import { NavLink, Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import SlideShow from "./Slideshow.js";
import SlideShowOci from "./SlideShowOci.js";
import SlideShowKoi from "./SlideShowKoi.js";
import SlideshowCf from "./SlideShowCf.js";
import SlideShowChoc from "./SlideShowChoc.js";
import SlideShowCcrf from "./SlideShowCcrf.js";
import SlideShowRcto from "./SlideShowRcto.js";
import SlideShowPort from "./SlideShowPort.js";
import SlideShowKris from "./SlideShowKris.js";
// Container
const Body = styled.div`
    // background-color: #282c34;
`;

const Boxcontainer = styled.div`
    width: 500px;

    @media screen and (max-width: 500px) {
        width: 90%;
    }

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

        @media screen and (max-width: 800px) {
            padding-bottom: 0;
        }

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

    > div {
        width: 25%;
        position: absolute;
        transition: 0.75s;
        // overflow: hidden;
        text-align: left;

        @media screen and (max-width: 800px) {
            // margin: 25px 2.5% 250px;

            min-width: 90%;
            margin: 25px auto 250px !important;
            display: none;
        }
    }

    div.drop {
        display: inline-block;
        margin-top: 1.75em;

        select {
            width: 150px;
            height: 25px;
            z-index: 15;
            position: relative;
            color: rgba(137, 196, 244, 1);
            background: transparent;
            border: 2px solid rgba(137, 196, 244, 1);

            option {
                color: #000;
            }

            &:active {
                border: 2px solid rgba(137, 196, 244, 1);
            }
        }
    }

    div p {
        text-align: left;
        font-size: 20px;
        letter-spacing: 2px;

        &:hover {
            cursor: pointer;
        }

        @media screen and (max-width: 1280px) {
            font-size: 17px;
        }
    }

    div a {
        text-align: center;
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

        @media screen and (max-width: 800px) {
            display: none;
        }
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

        @media screen and (max-width: 1280px) {
            left: 250px !important;
        }
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

        @media screen and (max-width: 1280px) {
            left: 500px !important;
        }
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
        left: 0;
    }
`;

const Image = styled.a`
    display: block;
    height: 400px;
    width: 100%;
    border-left: 0.5px solid #000;
    border-right: 0.5px solid #000;
    border-bottom: 0.5px solid #000;
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

    &.d {
        background-image: url("${id}");
    }

    &.e {
        background-image: url("${ie}");
    }

    &.f {
        background-image: url("${ig}");
    }

    &.g {
        background-image: url("${igg}");
    }

    &.h {
        background-image: url("${ih}");
    }

    &.i {
        background-image: url("${ii}");
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
    // padding-bottom: 100px;
    margin: 25px 25px;
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

    a {
        color: rgba(137, 196, 244, 1) !important;
        display: inline-block;
        min-width: 150px;
        font-size: 54px;
        font-weight: bolder;
        position: relative;
        top: 5px;
        margin-right: 15px;
        z-index: 15;

        &:hover {
            color: rgba(197, 239, 247, 1) !important;
            text-decoration: underline;
        }
    }

    @media screen and (max-width: 1280px) {
        min-width: 800px;
        margin: 25px auto 50px;

        @media screen and (max-width: 960px) {
            padding-bottom: 0;

            @media screen and (max-width: 800px) {
                min-width: 100%;
            }
        }
    }
`;

const TestBox = styled.div`
    width: 100%;
    min-height: 800px;
    min-width: 1280px;
    // padding-bottom: 250px;
    margin: 25px 25px 125px;
    display: flex !important;
    flex-wrap: wrap;
    position: relative !important;
    transition: 0.4s;

    @media screen and (max-width: 1280px) {
        min-width: 100%;

        @media screen and (max-width: 850px) {
            min-width: 95%;
        }
    }

    div {
        flex: 0 0 33.333333%;
        width: 33%;
        position: relative;
        transition: 0.4s;

        &.show {
            display: block;
            opaicty: 1;
        }

        &.hidden {
            display: none;
            opacity: 0;
        }

        @media screen and (max-width: 1600px) {
            flex: 0 0 50%;
            width: 50%;
        }

        @media screen and (max-width: 1280px) {
            flex: 0 0 100%;
            display: block;
            width: 100%;
            max-width: 800px;
            margin: 0 auto;

            @media screen and (max-width: 850px) {
                max-width: 90%;
            }
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
    top: 0px;
    background: #fff;
    min-height: 400px;
    opacity: 0;
    text-align: center !important;
    color: rgba(46, 49, 49, 1) !important;
    line-height: 18;
    font-weight: bold;
    margin: 0;

    &:hover,
    &.hover {
        display: block;
        opacity: 0.5;
    }
`;

const ModalBox = styled.div`
    min-height: 800px;
    width: 60% !important;
    max-width: 800px;
    display: none;
    // background: #fff;
    position: fixed !important;
    overflow: visible;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 25;

    &.click {
        display: block;
    }

    // &:hover {
    //     cursor: pointer;
    // }

    &.unclick {
        display: none;
    }

    // @media screen and (min-width: 1300px) {
    //     min-width: 1268px;
    // }
`;

const ModalContainer = styled.div`
    height: 100vh;
    display: none;
    position: fixed !important;
    z-index: 24;
    background: #000;
    opacity: 0.75;
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
    // border: 2px solid rgba(108, 122, 137, 1);
    margin-bottom: 20px;
    transition: 0.4s;
    margin-right: 25px;
    display: inline-block;

    &:hover {
        background: rgba(108, 122, 137, 1);

        a {
            color: #fff !important;
        }
    }

    a {
        position: relative !important;
        color: rgba(108, 122, 137, 1) !important;
        font-weight: bold;
        font-size: 16px;
        width: 160px !important;
        min-height: 40px;
        display: block;
        line-height: 3;
        z-index: 5;
        font-weight: redular;
    }

    a:nth-child(1) {
        background: rgb(28, 4, 59);
        border: 1px solid rgb(28, 4, 59);
        color: #fff !important;
        border: 2;

        &:hover {
            background: #fff !important;
            color: rgb(28, 4, 59) !important;
        }
    }

    &.link {
        margin: 0 auto;
        background: rgba(137, 196, 244, 1);
        color: rgb(28, 4, 59) !important;

        &:hover {
            color: rgba(137, 196, 244, 1) !important;
        }
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
            modalB: false,
            modalC: false,
            modalD: false,
            modalE: false,
            modalF: false,
            modalG: false,
            modalH: false,
            modalI: false,
            wor: true,
            rea: true,
            ang: true,
            site: true,
        };

        this.hover = this.hover.bind(this);
        this.listenToScroll = this.listenToScroll.bind(this);
        this.openModalA = this.openModalA.bind(this);
        this.openModalB = this.openModalB.bind(this);
        this.openModalC = this.openModalC.bind(this);
        this.openModalD = this.openModalD.bind(this);
        this.openModalE = this.openModalE.bind(this);
        this.openModalF = this.openModalF.bind(this);
        this.openModalG = this.openModalG.bind(this);
        this.openModalH = this.openModalH.bind(this);
        this.openModalI = this.openModalI.bind(this);
        this.closeModalA = this.closeModalA.bind(this);
        this.closeModalB = this.closeModalB.bind(this);
        this.closeModalC = this.closeModalC.bind(this);
        this.closeModalD = this.closeModalD.bind(this);
        this.closeModalE = this.closeModalE.bind(this);
        this.closeModalF = this.closeModalF.bind(this);
        this.closeModalG = this.closeModalG.bind(this);
        this.closeModalH = this.closeModalH.bind(this);
        this.closeModalI = this.closeModalI.bind(this);
        this.modalA = this.modalA.bind(this);
        this.modalB = this.modalB.bind(this);
        this.modalC = this.modalC.bind(this);
        this.modalD = this.modalD.bind(this);
        this.modalE = this.modalE.bind(this);
        this.modalF = this.modalF.bind(this);
        this.modalG = this.modalG.bind(this);
        this.modalH = this.modalH.bind(this);
        this.modalI = this.modalI.bind(this);
        this.myDivToFocus = React.createRef();
    }

    componentDidMount() {
        // console.log("hi");
    }

    listenToDropdown = (e) => {
        console.log(e.target.value);

        if (e.target.value === "all") {
            this.setState({
                ang: true,
                rea: true,
                wor: true,
                site: true,
            });
        }
        if (e.target.value === "ang") {
            this.setState({
                ang: true,
                rea: false,
                wor: false,
                site: false,
            });
        }
        if (e.target.value === "rea") {
            this.setState({
                rea: true,
                ang: false,
                wor: false,
                site: false,
            });
        }
        if (e.target.value === "wor") {
            this.setState({
                wor: true,
                ang: false,
                rea: false,
                site: false,
            });

            console.log(this.state.wor);
        }
    };

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
    openModalB() {
        this.setState(() => ({ modalB: true }));
    }
    openModalC() {
        this.setState(() => ({ modalC: true }));
    }
    openModalD() {
        this.setState(() => ({ modalD: true }));
    }
    openModalE() {
        this.setState(() => ({ modalE: true }));
    }
    openModalF() {
        this.setState(() => ({ modalF: true }));
    }
    openModalG() {
        this.setState(() => ({ modalG: true }));
    }
    openModalH() {
        this.setState(() => ({ modalH: true }));
    }
    openModalI() {
        this.setState(() => ({ modalI: true }));
    }

    closeModalA() {
        this.setState(() => ({ modalA: false }));
    }
    closeModalB() {
        this.setState(() => ({ modalB: false }));
    }
    closeModalC() {
        this.setState(() => ({ modalC: false }));
    }
    closeModalD() {
        this.setState(() => ({ modalD: false }));
    }
    closeModalE() {
        this.setState(() => ({ modalE: false }));
    }
    closeModalF() {
        this.setState(() => ({ modalF: false }));
    }
    closeModalG() {
        this.setState(() => ({ modalG: false }));
    }
    closeModalH() {
        this.setState(() => ({ modalH: false }));
    }
    closeModalI() {
        this.setState(() => ({ modalI: false }));
    }

    modalA() {
        this.setState(() => ({ modalA: true }));
    }
    modalB() {
        this.setState(() => ({ modalB: true }));
    }
    modalC() {
        this.setState(() => ({ modalC: true }));
    }
    modalD() {
        this.setState(() => ({ modalD: true }));
    }
    modalE() {
        this.setState(() => ({ modalE: true }));
    }
    modalF() {
        this.setState(() => ({ modalF: true }));
    }
    modalG() {
        this.setState(() => ({ modalG: true }));
    }
    modalH() {
        this.setState(() => ({ modalH: true }));
    }
    modalI() {
        this.setState(() => ({ modalI: true }));
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
                                    id="home"
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
                                <div id="work"></div>
                                {/* <TitleBox>
                                    <div>
                                        <a href="https://github.com/baokhoavu">Work</a> 
                                        <div className="drop">
                                            <select
                                                onChange={this.listenToDropdown}
                                                value={this.state.value}
                                                name="tech"
                                                id="tech"
                                            >
                                                <option value="all">
                                                    Tech: All
                                                </option>
                                                <option value="ang">
                                                    Angular
                                                </option>
                                                <option value="rea">
                                                    React
                                                </option>
                                                <option value="wor">
                                                    Wordpress
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </TitleBox> */}
                                <TestBox
                                    className={
                                        "test a" +
                                        (this.state.animate ? "slide" : null)
                                    }
                                    id="work"
                                    ref={this.myDivToFocus}
                                >
                                    <TitleBox>
                                        <div>
                                            <a href="https://github.com/baokhoavu">
                                                Work
                                            </a>
                                            <div className="drop">
                                                <select
                                                    onChange={
                                                        this.listenToDropdown
                                                    }
                                                    value={this.state.value}
                                                    name="tech"
                                                    id="tech"
                                                >
                                                    <option value="all">
                                                        Tech: All
                                                    </option>
                                                    <option value="ang">
                                                        Angular
                                                    </option>
                                                    <option value="rea">
                                                        React
                                                    </option>
                                                    <option value="wor">
                                                        Wordpress
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </TitleBox>
                                    <div
                                        className={
                                            this.state.wor ? "show" : "hidden"
                                        }
                                    >
                                        <Image className="d">
                                            <HoverText
                                                onMouseEnter={this.hoverd}
                                                onMouseLeave={this.hoverd}
                                                onClick={this.openModalD}
                                                className={
                                                    this.state.hovered
                                                        ? "hovered"
                                                        : null
                                                }
                                            ></HoverText>
                                        </Image>
                                    </div>
                                    <div
                                        className={
                                            this.state.ang ? "show" : "hidden"
                                        }
                                    >
                                        <Image className="b">
                                            <HoverText
                                                onMouseEnter={this.hoverb}
                                                onMouseLeave={this.hoverb}
                                                onClick={this.openModalB}
                                                className={
                                                    this.state.hovered
                                                        ? "hovered"
                                                        : null
                                                }
                                            ></HoverText>
                                        </Image>
                                    </div>
                                    <div
                                        className={
                                            this.state.rea ? "show" : "hidden"
                                        }
                                    >
                                        <Image className="g">
                                            <HoverText
                                                onMouseEnter={this.hoverb}
                                                onMouseLeave={this.hoverb}
                                                onClick={this.openModalG}
                                                className={
                                                    this.state.hovered
                                                        ? "hovered"
                                                        : null
                                                }
                                            ></HoverText>
                                        </Image>
                                    </div>
                                    <div
                                        className={
                                            this.state.wor ? "show" : "hidden"
                                        }
                                    >
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
                                    </div>
                                    <div
                                        className={
                                            this.state.ang ? "show" : "hidden"
                                        }
                                    >
                                        <Image className="c">
                                            <HoverText
                                                onMouseEnter={this.hoverc}
                                                onMouseLeave={this.hoverc}
                                                onClick={this.openModalC}
                                                className={
                                                    this.state.hovered
                                                        ? "hovered"
                                                        : null
                                                }
                                            ></HoverText>
                                        </Image>
                                    </div>

                                    <div
                                        className={
                                            this.state.site ? "show" : "hidden"
                                        }
                                    >
                                        <Image className="e">
                                            <HoverText
                                                onMouseEnter={this.hovere}
                                                onMouseLeave={this.hovere}
                                                onClick={this.openModalE}
                                                className={
                                                    this.state.hovered
                                                        ? "hovered"
                                                        : null
                                                }
                                            ></HoverText>
                                        </Image>
                                    </div>
                                    <div
                                        className={
                                            this.state.site ? "show" : "hidden"
                                        }
                                    >
                                        <Image className="f">
                                            <HoverText
                                                onMouseEnter={this.hoverf}
                                                onMouseLeave={this.hoverf}
                                                onClick={this.openModalF}
                                                className={
                                                    this.state.hovered
                                                        ? "hovered"
                                                        : null
                                                }
                                            ></HoverText>
                                        </Image>
                                    </div>
                                    <div
                                        className={
                                            this.state.rea ? "show" : "hidden"
                                        }
                                    >
                                        <Image className="h">
                                            <HoverText
                                                onMouseEnter={this.hoverh}
                                                onMouseLeave={this.hoverh}
                                                onClick={this.openModalH}
                                                className={
                                                    this.state.hovered
                                                        ? "hovered"
                                                        : null
                                                }
                                            ></HoverText>
                                        </Image>
                                    </div>
                                    <div
                                        className={
                                            this.state.rea ? "show" : "hidden"
                                        }
                                    >
                                        <Image className="i">
                                            <HoverText
                                                onMouseEnter={this.hoveri}
                                                onMouseLeave={this.hoveri}
                                                onClick={this.openModalI}
                                                className={
                                                    this.state.hovered
                                                        ? "hovered"
                                                        : null
                                                }
                                            ></HoverText>
                                        </Image>
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
                                            <p>
                                                Wordpress, Liquid Sage, HTML5,
                                                Bootstrap, SCSS, Ajax, Restful
                                                Api, Scheduler, Vanilla jS,
                                                Scss, jQuery, php, Blackbaud
                                                Luminate, Convio
                                            </p>
                                            <p className="copy">
                                                Full multi-page website built
                                                into a reuseable template
                                                pulling and saving live event
                                                data. Developed including custom
                                                functionality and responsive
                                                designs, we help promote new and
                                                existing services provided. Data
                                                is represented using live api
                                                intergration with multiple
                                                platforms.
                                            </p>
                                        </div>
                                        <div>
                                            {/* <p>
                                                Wordpress, Liquid, Sage, Ajax,
                                                Restful Api, Scheduler, vanilla
                                                jS, Scss, jQuery, php, Blackbaud
                                                Luminate, Convio
                                            </p>
                                            <p className="copy">
                                                Full multi-page website built
                                                into a reuseable template
                                                pulling and saving live event
                                                data. Developed including custom
                                                functionality and responsive
                                                designs, we help promote new and
                                                existing services provided. Data
                                                is represented using live api
                                                intergration with multiple
                                                platforms.
                                        
										    </p> */}
                                            <Linkable>
                                                <a href="https://ride.conquercancer.ca/toronto20">
                                                    View Website
                                                </a>
                                            </Linkable>
                                            {/* <Linkable>
                                                <a href="https://bitbucket.org/baokhoa/to20_oci">
                                                    View Work
                                                </a>
                                            </Linkable> */}
                                        </div>
                                    </div>
                                </ModalBox>
                                <ModalBox
                                    onClick={this.modalB}
                                    className={
                                        this.state.modalB ? "click" : "unclick"
                                    }
                                >
                                    <SlideShowOci></SlideShowOci>
                                    <div className="slide-descrip">
                                        <div>
                                            <h2>
                                                Ride Alberta Online Check In
                                            </h2>
                                        </div>
                                        <div>
                                            <p>
                                                Angular 9, Scss, Express, ES6,
                                                SCSS, Typescript, Material,
                                                RxJS, Dataservice, Blackbaud
                                                Luminate, Convio, NodeJS
                                            </p>
                                            <p className="copy">
                                                Multi page web application
                                                developed in order to record
                                                transactions and user
                                                information connected to a live
                                                fundraising database. This app
                                                also has live data binding for
                                                revisiting as well as validation
                                                from both material and custom
                                                inhouse. Templated into a client
                                                or server included app in order
                                                to meet fundraising brief
                                                requirements.
                                            </p>
                                        </div>
                                        <div>
                                            <Linkable>
                                                <a href="https://baokhoavu.com/ab20_oci">
                                                    View Website
                                                </a>
                                            </Linkable>
                                            <Linkable>
                                                <a href="https://github.com/baokhoavu/server_oci">
                                                    View Work
                                                </a>
                                            </Linkable>
                                        </div>
                                    </div>
                                </ModalBox>
                                <ModalBox
                                    onClick={this.modalC}
                                    className={
                                        this.state.modalC ? "click" : "unclick"
                                    }
                                >
                                    <SlideShowKoi></SlideShowKoi>
                                    <div className="slide-descrip">
                                        <div>
                                            <h2>Causeforce KOI</h2>
                                        </div>
                                        <div>
                                            <p>
                                                Angular 5, Mongodb, Mongoose,
                                                HTML5, ES5, Express, Promise,
                                                NodeJs, Blackbaud Luminate,
                                                Convio, momentjs
                                            </p>
                                            <p className="copy">
                                                Multi-page web application
                                                developed in display fundraising
                                                values in real time. This also
                                                records a daily snapshot in
                                                order to preserve data for
                                                analysis. Connected to Blackbaud
                                                Luminate's fundraising platform,
                                                we process and save here in
                                                order to re-render on other
                                                platforms if needed.
                                            </p>
                                        </div>
                                        <div>
                                            <Linkable>
                                                <a href="https://cfkoi.herokuapp.com">
                                                    View Website
                                                </a>
                                            </Linkable>
                                            <Linkable>
                                                <a href="https://github.com/baokhoavu/koi">
                                                    View Work
                                                </a>
                                            </Linkable>
                                        </div>
                                    </div>
                                </ModalBox>
                                <ModalBox
                                    onClick={this.modalD}
                                    className={
                                        this.state.modalD ? "click" : "unclick"
                                    }
                                >
                                    <SlideshowCf></SlideshowCf>
                                    <div className="slide-descrip">
                                        <div>
                                            <h2>Causeforce</h2>
                                        </div>
                                        <div>
                                            <p>
                                                WordPress, VueJs, Tailwind,
                                                jQuery, Blackbaud Luminate
                                            </p>
                                            <p className="copy">
                                                Custom Home Page built using
                                                VueJs and Wordpress in order to
                                                display Causeforce's new
                                                branding and services. This
                                                design was created by UX/UI
                                                designers incorporating latest
                                                user flow and transitions.
                                                Development and proofing was
                                                done with minimal readable
                                                coding.
                                            </p>
                                        </div>
                                        <div>
                                            <Linkable>
                                                <a href="https://causeforce.com/">
                                                    View Website
                                                </a>
                                            </Linkable>
                                            <Linkable>
                                                <a href="https://github.com/baokhoavu/work_press">
                                                    View Work
                                                </a>
                                            </Linkable>
                                        </div>
                                    </div>
                                </ModalBox>
                                <ModalBox
                                    onClick={this.modalE}
                                    className={
                                        this.state.modalE ? "click" : "unclick"
                                    }
                                >
                                    <SlideShowCcrf></SlideShowCcrf>
                                    <div className="slide-descrip">
                                        <div>
                                            <h2>
                                                Children's Cancer Research Fund
                                            </h2>
                                        </div>
                                        <div>
                                            <p>
                                                Blackbaud Luminate, HTML5, CSS,
                                                Bootstrap, Vanilla Js, jQuery,
                                                Luminate Api, Php
                                            </p>
                                            <p className="copy">
                                                Re-developed the home page as
                                                well as other landing pages
                                                incorporating latest responsive
                                                web designs. This included
                                                updating their assets and
                                                highlighting key features
                                                already existing on the site. We
                                                also added tracking for
                                                analytics. Custom functionality
                                                that incorporated Blackbaud
                                                Luminates API for out of the box
                                                plugins.
                                            </p>
                                        </div>
                                        <div>
                                            <Linkable>
                                                <a href="https://childrenscancer.org/">
                                                    View Website
                                                </a>
                                            </Linkable>
                                        </div>
                                    </div>
                                </ModalBox>
                                <ModalBox
                                    onClick={this.modalF}
                                    className={
                                        this.state.modalF ? "click" : "unclick"
                                    }
                                >
                                    <SlideShowChoc></SlideShowChoc>
                                    <div className="slide-descrip">
                                        <div>
                                            <h2>
                                                CHOC Children's - Children's
                                                Hospital of Orange County
                                            </h2>
                                        </div>
                                        <div>
                                            <p>
                                                Rallybound, HTML5, CSS, Vanilla
                                                Js,
                                            </p>
                                            <p className="copy">
                                                Developed campaign and landing
                                                pages alongside the client and
                                                Design/UX in order to include
                                                latest web designs. Created
                                                reusable responsive emails.
                                            </p>
                                        </div>
                                        <div>
                                            <Linkable>
                                                <a href="https://www.chocwalk.org/">
                                                    View Website
                                                </a>
                                            </Linkable>
                                        </div>
                                    </div>
                                </ModalBox>
                                <ModalBox
                                    onClick={this.modalG}
                                    className={
                                        this.state.modalG ? "click" : "unclick"
                                    }
                                >
                                    <SlideShowRcto></SlideShowRcto>
                                    <div className="slide-descrip">
                                        <div>
                                            <h2>
                                                Ride To Conquer Cancer Toronto
                                                React Homepage
                                            </h2>
                                        </div>
                                        <div>
                                            <p>
                                                ReactJs, styled-components,
                                                Blackbaud Luminate
                                            </p>
                                            <p className="copy">
                                                Developed the Ride To Conquer
                                                Cancer Toronto's Home page using
                                                ReactJS instead of Wordpress.
                                                Styled Component for styles
                                                using nesting and classes.
                                                Leaderboard uses a Blackbaud
                                                Luminate API that renders a json
                                                of data. Only viewable when
                                                applied within the Blackbaud
                                                Luminate server via FTP access
                                                due to shared hosting and
                                                whitelisting limits.
                                            </p>
                                        </div>
                                        <div>
                                            <Linkable>
                                                <a href="https://baokhoavu.com/ridetorontoreact/">
                                                    View Website
                                                </a>
                                            </Linkable>
                                            <Linkable>
                                                <a href="https://github.com/baokhoavu/ridetorontoreact">
                                                    View Work
                                                </a>
                                            </Linkable>
                                        </div>
                                    </div>
                                </ModalBox>
                                <ModalBox
                                    onClick={this.modalH}
                                    className={
                                        this.state.modalH ? "click" : "unclick"
                                    }
                                >
                                    <SlideShowPort></SlideShowPort>
                                    <div className="slide-descrip">
                                        <div>
                                            <h2>React Portfolio</h2>
                                        </div>
                                        <div>
                                            <p>
                                                ReactJs, styled-components,
                                                NodeJs, ParticleJs, Express
                                            </p>
                                            <p className="copy">
                                                Developed a Portfolio displaying
                                                skills and projects used to give
                                                a glimpse of my experience
                                                working as a developer. Created
                                                using create-react-app out of
                                                the box applying styled
                                                components for components and
                                                stylesheets. Website is
                                                responsive and uses flex for
                                                layouts across browsers.
                                                ParticleJS is used to display
                                                particles in the background with
                                                interactive motion. Hosted on
                                                a2hosting using FTP to upload
                                                and update after SSH user
                                                access.
                                            </p>
                                        </div>
                                        <div>
                                            <Linkable>
                                                <a href="https://baokhoavu.com">
                                                    View Website
                                                </a>
                                            </Linkable>
                                            <Linkable>
                                                <a href="https://github.com/baokhoavu/reactportfolio">
                                                    View Work
                                                </a>
                                            </Linkable>
                                        </div>
                                    </div>
                                </ModalBox>
                                <ModalBox
                                    onClick={this.modalI}
                                    className={
                                        this.state.modalI ? "click" : "unclick"
                                    }
                                >
                                    <SlideShowKris></SlideShowKris>
                                    <div className="slide-descrip">
                                        <div>
                                            <h2>KristeenaJS</h2>
                                        </div>
                                        <div>
                                            <p>
                                                NextJs, ReactJs, SCSS, NodeJS,
                                                Snipcart API
                                            </p>
                                            <p className="copy">
                                                Developed a landing page that's
                                                used to promote information
                                                while offering ecommerce
                                                services as a Single Page
                                                Application. Utilizing an API
                                                for ecommerce services
                                                connecting with the inventory,
                                                users are allowed seamless
                                                experience across browsers.
                                                Users can also edit their
                                                selection and revisit their
                                                choices if desired.
                                            </p>
                                        </div>
                                        <div>
                                            <Linkable>
                                                <a href="https://kristeenajs.herokuapp.com/">
                                                    View Website
                                                </a>
                                            </Linkable>
                                            <Linkable>
                                                <a href="https://github.com/baokhoavu/kristeenajs">
                                                    View Work
                                                </a>
                                            </Linkable>
                                        </div>
                                    </div>
                                </ModalBox>
                                <ModalContainer
                                    onClick={this.closeModalA}
                                    className={
                                        this.state.modalA ? "click" : "unclick"
                                    }
                                ></ModalContainer>
                                <ModalContainer
                                    onClick={this.closeModalB}
                                    className={
                                        this.state.modalB ? "click" : "unclick"
                                    }
                                ></ModalContainer>
                                <ModalContainer
                                    onClick={this.closeModalC}
                                    className={
                                        this.state.modalC ? "click" : "unclick"
                                    }
                                ></ModalContainer>
                                <ModalContainer
                                    onClick={this.closeModalD}
                                    className={
                                        this.state.modalD ? "click" : "unclick"
                                    }
                                ></ModalContainer>
                                <ModalContainer
                                    onClick={this.closeModalE}
                                    className={
                                        this.state.modalE ? "click" : "unclick"
                                    }
                                ></ModalContainer>
                                <ModalContainer
                                    onClick={this.closeModalF}
                                    className={
                                        this.state.modalF ? "click" : "unclick"
                                    }
                                ></ModalContainer>
                                <ModalContainer
                                    onClick={this.closeModalG}
                                    className={
                                        this.state.modalG ? "click" : "unclick"
                                    }
                                ></ModalContainer>
                                <ModalContainer
                                    onClick={this.closeModalH}
                                    className={
                                        this.state.modalH ? "click" : "unclick"
                                    }
                                ></ModalContainer>
                                <ModalContainer
                                    onClick={this.closeModalI}
                                    className={
                                        this.state.modalI ? "click" : "unclick"
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
