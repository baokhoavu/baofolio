// Imports
import React, { Component } from 'react';
import styled from 'styled-components';
import '../App.css';
import imageA from '../assets/A.PNG';
import imageB from '../assets/B.PNG';
import imageC from '../assets/C.PNG';
import imageD from '../assets/D.PNG';
import imageE from '../assets/E.PNG';
import imageF from '../assets/F.PNG';

const AboutBox = styled.div`

    width: 100%;
    height: 100vh;    
    background: #282c34;

    > div > div {
        max-width: 1280px;
        height: 100%;
        padding: 20px 0 50px;
        margin: 0 auto;
        background: #282c34;
    }

    > div > div > div {
        margin-top: 10%;
    }

    > div > div > div > p {
        font-weight: bold;
        color: #fff;
    }

    > div > div > div > h2 {
        font-weight: bold;
        color: #fff;
    }

    span {
        color: #09D3AD;
    }

    @media screen and (max-width: 1280px) {
        h1 {
            text-align: center;
        }
    }

    @media screen and (max-width: 967px) {
        > div > div> div:nth-child(2) {
            margin-top: 0;
        }
    }

    @media screen and (max-width: 768px) {
        height: 100%;
    }
`

const Work = styled.div`
    display: flex;
    flex-wrap: nowrap;

    > div {
        width: 30%;
        margin: 0 3%;
        // border: 2px solid red;
    }

    > div.first {
        margin-left: 0;
    }

    > div.last {
        margin-right: 0;
    }

    a {
        color: #fff;
        font-size: 1.5em;
        font-weight: bolder;
        margin: 15px 0 35px;
        text-decoration: none;
        z-index: 7;
        position: relative;

        &:hover {
            text-decoration: underline;
            color: #09D3AD;
        }
    }

    @media screen and (max-width: 1280px) {
        display: block;

        > div {
            width: 100%;
            max-width: 500px;
            margin: 0 auto;
        }

        > div.first {
            margin-left: auto;
        }
    
        > div.last {
            margin-right: auto;
        }
    }

`

const Image = styled.a`
    display: block;
    height: 250px;
    width: 100%;    
    -webkit-transition: 0.4s;
    transition: 0.4s;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transition-delay: 75ms;
    z-index: 7;
    position: relative;

    &.a {
        background-image: url("${imageA}");
    }

    &.b {
        background-image: url("${imageB}");
    }

    &.c {
        background-image: url("${imageC}");
    }

    &.d {
        background-image: url("${imageD}");
    }

    &.e {
        background-image: url("${imageE}");
    }

    &.f {
        background-image: url("${imageF}");
    }

    &:hover {
        // border-left: 5px solid #09D3AD;
        // border-bottom: 5px solid #09D3AD;

        border: 5px solid #09D3AD;
    }
    
`

// About Class Component
export default class About extends Component {

    render() {
        return (
            <AboutBox>
                <div>
                    <div>
                        <div>
                            <h1>
                                <span>Work</span>
                            </h1>
                            <Work>
                                <div class="first">
                                    <a href="http://ride.conquercancer.ca/toronto20">Ride To Conquer Cancer Toronto</a>
                                    <div>
                                        <Image className="a" href="http://ride.conquercancer.ca/toronto20"></Image>
                                    </div>
                                </div>
                                <div>
                                    <a href="https://secure.conquercancer.ca/va19_dev/index.html#/step-01">Online Check-In</a>
                                    <div>
                                        <Image className="b" href="https://secure.conquercancer.ca/va19_dev/index.html#/step-01"></Image>
                                    </div>
                                </div>
                                <div class="last">
                                    <a href="https://cfkoi.herokuapp.com/">Causeforce KOI</a>
                                    <div>
                                        <Image className="c" href="https://cfkoi.herokuapp.com/"></Image>
                                    </div>
                                </div>
                            </Work>
                            <Work>
                                <div class="first">
                                    <a href="https://secure.conquercancer.ca/index.html">Ride To Conqer Cancer</a>
                                    <div>
                                        <Image className="d" href="https://secure.conquercancer.ca/index.html"></Image>
                                    </div>
                                </div>
                                <div>
                                    <a href="https://secure.weekendtoconquercancer.ca/site/SPageNavigator/to20_homepage">Weekend To Conquer Cancer</a>
                                    <div>
                                        <Image className="e" href="https://secure.weekendtoconquercancer.ca/site/SPageNavigator/to20_homepage"></Image>
                                    </div>
                                </div>
                                <div class="last">
                                    <a href="http://causeforce.com/">Causeforce</a>
                                    <div>
                                        <Image className="f" href="http://causeforce.com/"></Image>
                                    </div>
                                </div>
                            </Work>
                            {/* <Work>
                                <div class="first">
                                    <h2>Ride To Conquer Cancer Toronto</h2>
                                    <div>
                                        <Image className="a"></Image>
                                    </div>
                                </div>
                                <div>
                                    <h2>Online Check-In</h2>
                                    <div>
                                        <Image className="b"></Image>
                                    </div>
                                </div>
                                <div class="last">
                                    <h2>Causeforce KOI</h2>
                                    <div>
                                        <Image className="c"></Image>
                                    </div>
                                </div>
                            </Work> */}
                        </div>
                    </div>
                </div>
            </AboutBox>
        )
    }
}