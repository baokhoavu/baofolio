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
import imageG from '../assets/G.PNG';
import imageH from '../assets/H.PNG';
import imageI from '../assets/I.PNG';

const AboutBox = styled.div`

    width: 100%;
    height: 100vh;    
    background: #282c34;

    h1 span a {
        color: #09D3AD;
        font-size: 32px;
    }
    
    h1 span a:hover {
        text-decoration: underline;
    }

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
        min-height: 50px

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

    &.g {
        background-image: url("${imageG}");
    }

    &.h {
        background-image: url("${imageH}");
    }

    &.i {
        background-image: url("${imageI}");
    }

    &:hover {
        // border-left: 5px solid #09D3AD;
        // border-bottom: 5px solid #09D3AD;

        // border: 5px solid #09D3AD;
        transform: scale(1.25);
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
                            <Work>
                                <h1>
                                    <span>Work - <a href="https://github.com/baokhoavu">Github</a></span>
                                </h1>
                            </Work>
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
                            <Work>
                                <div class="first">
                                    <a href="https://baokhoavu.github.io/gameOfWar/">Game Of War</a>
                                    <div>
                                        <Image className="g" href="https://baokhoavu.github.io/gameOfWar/"></Image>
                                    </div>
                                </div>
                                <div>
                                    <a href="https://food-meets-tinder.herokuapp.com/">Food Meet Tinder</a>
                                    <div>
                                        <Image className="h" href="https://food-meets-tinder.herokuapp.com/"></Image>
                                    </div>
                                </div>
                                <div class="last">
                                    <a href="https://peoplewhojustwannasaystuff.wordpress.com">PeopleWhoJustWannaSayStuff</a>
                                    <div>
                                        <Image className="i" href="https://peoplewhojustwannasaystuff.wordpress.com"></Image>
                                    </div>
                                </div>
                            </Work>
                        </div>
                    </div>
                </div>
            </AboutBox>
        )
    }
}
