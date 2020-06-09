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
import imageJ from '../assets/J.PNG';
import imageK from '../assets/K.PNG';
import imageL from '../assets/L.png';

const AboutBox = styled.div`

    width: 100%;
    height: 100vh;    
    background: #282c34;
    overflow: hidden;

    h1 span a {
        color: #0c547d;
        font-size: 32px;
    }
    
    h1 span a:hover {
        text-decoration: underline;
        color: #09D3D8 !important;
    }

    > div {
        height: 100%;
        width: 100%;
        overflow: hidden;
        position: relative;
    }

    > div > div {
        height: 100%;
        padding: 20px 0 50px;
        position: absolute;
        left: 0;
        right: 0;
        overflow: auto;
        ::-webkit-scrollbar {
            display: none;
        }
    }

    > div > div > div {
        max-width: 1280px;
        margin: 5% auto 0;
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
        color: #0c547d;
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

    > div.first {
        width: 35%;
        padding: 50px;
    }

    > div.last {
        width: 60%;
        padding: 40px 5% 0;

    }

    &.title {
        padding: 0 50px;
    }

    a {
        color: #fff;
        font-size: 1.5em;
        font-weight: bolder;
        text-decoration: none;
        z-index: 7;
        position: relative;
        min-height: 50px;

        &:hover {
            text-decoration: underline;
            color: #09D3D8 !important;
        }
    }

    p {
        font-weight: bold;
        color: #fff;
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

    &.j {
        background-image: url("${imageJ}");
    }   

    &.k {
        background-image: url("${imageK}");
    }

    &.l {
        background-image: url("${imageL}");
    }
 

    &:hover {
        // border-left: 5px solid #0c547d;
        // border-bottom: 5px solid #0c547d;

        // border: 5px solid #0c547d;
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
                            <Work className="title">
                                <h1>
                                    <span>Work - <a href="https://github.com/baokhoavu">Github</a></span>
                                </h1>
                            </Work>
                            <Work>
                                <div class="first">
                                    <div>
                                        <Image className="a" href="http://ride.conquercancer.ca/toronto20"></Image>
                                    </div>
                                </div>
                                <div class="last">
                                    <a href="http://ride.conquercancer.ca/toronto20">Ride To Conquer Cancer Toronto</a>
                                    <p>
                                        WordPress, SCSS, jQuery, Jupiter Theme, Restful API
                                    </p>
                                </div>
                            </Work>
                            <Work>
                                <div class="first">
                                    <div>
                                        <Image className="l" href="https://baoskitchen.herokuapp.com"></Image>
                                    </div>
                                </div>
                                <div class="last">
                                    <a href="https://baoskitchen.herokuapp.com">Baos Kitchen</a>
                                    <p>
                                        HTML, CSS, JS, Spoontacular API
                                    </p>
                                </div>
                            </Work>
                            <Work>
                                <div class="first">
                                    <div>
                                        <Image className="k" href="https://baosum.herokuapp.com/#/tab/friends"></Image>
                                    </div>
                                </div>
                                <div class="last">
                                    <a href="https://baosum.herokuapp.com/#/tab/friends">Bao Sum Items</a>
                                    <p>
                                        Ionic 4, Angular, Express, CSS, JavaScript
                                    </p>
                                </div>
                            </Work>
                            <Work>
                                <div class="first">
                                    <div>
                                        <Image className="j" href="https://baoplans.herokuapp.com/"></Image>
                                    </div>
                                </div>
                                <div class="last">
                                    <a href="https://baoplans.herokuapp.com/">Baoplans</a>
                                    <p>
                                        ReactJS, Google Maps, Styled Components
                                    </p>
                                </div>
                            </Work>
                            <Work>
                                <div class="first">
                                    <div>
                                        <Image className="c" href="https://cfkoi.herokuapp.com/"></Image>
                                    </div>
                                </div>
                                <div class="last">
                                    <a href="https://cfkoi.herokuapp.com/">Causeforce KOI</a>
                                    <p>
                                        Angular 5, Express, NodeJS, Mongodb, Mongoose, Blackbaud Luminate
                                    </p>
                                </div>
                            </Work>
                            <Work>
                                <div class="first">
                                    <div>
                                        <Image className="b" href="https://secure.conquercancer.ca/va19_dev/index.html#/step-01"></Image>
                                    </div>
                                </div>
                                <div class="last">
                                    <a href="https://secure.conquercancer.ca/to20_oci/index.html#/step-01">Online Check-In</a>
                                    <p>
                                        Angular 9, NodeJs, AWS, Dataservice, Blackbaud Luminate, Material, Typescript
                                    </p>
                                </div>
                            </Work>
                            <Work>
                                <div class="first">
                                    <div>
                                        <Image className="d" href="https://secure.conquercancer.ca/index.html"></Image>
                                    </div>
                                </div>
                                <div class="last">
                                    <a href="https://secure.conquercancer.ca/index.html">Ride To Conqer Cancer</a>
                                    <p>
                                        HTML, jQuery, Bootstrap, Blackbaud Luminate
                                    </p>
                                </div>
                            </Work>
                            <Work>
                                <div class="first">
                                    <div>
                                        <Image className="e" href="https://secure.weekendtoconquercancer.ca/site/SPageNavigator/to20_homepage"></Image>
                                    </div>
                                </div>
                                <div class="last">
                                    <a href="https://secure.weekendtoconquercancer.ca/site/SPageNavigator/to20_homepage">Weekend To Conquer Cancer</a>
                                    <p>
                                        HTML, jQuery, Bootstrap, Blackbaud Luminate
                                    </p>
                                </div>
                            </Work>
                            <Work>
                                <div class="first">
                                    <div>
                                        <Image className="f" href="http://causeforce.com/"></Image>
                                    </div>
                                </div>
                                <div class="last">
                                    <a href="http://causeforce.com/">Causeforce</a>
                                    <p>
                                        WordPress, Blackbaud Luminate, Liquid Sage Theme, jQuery, Gulp
                                    </p>
                                </div>
                            </Work>
                            <Work>
                                <div class="first">
                                    <div>
                                        <Image className="g" href="https://baokhoavu.github.io/gameOfWar/"></Image>
                                    </div>
                                </div>
                                <div class="last">
                                    <a href="https://baokhoavu.github.io/gameOfWar/">Game Of War</a>
                                    <p>
                                        HTML, CSS, JS
                                    </p>
                                </div>
                            </Work>
                            <Work>
                                <div class="first">
                                    <div>
                                        <Image className="h" href="https://food-meets-tinder.herokuapp.com/"></Image>
                                    </div>
                                </div>
                                <div class="last">
                                    <a href="https://food-meets-tinder.herokuapp.com/">Food Meet Tinder</a>
                                    <p>
                                        HTML, Bootstrap, Mongodb, Express, Yelp API, OAuth
                                    </p>
                                </div>
                            </Work>
                            <Work>
                                <div class="first">
                                    <div>
                                        <Image className="i" href="https://peoplewhojustwannasaystuff.wordpress.com"></Image>
                                    </div>
                                </div>
                                <div class="last">
                                    <a href="https://peoplewhojustwannasaystuff.wordpress.com">PeopleWhoJustWannaSayStuff</a>
                                    <p>
                                        WordPress, Boostrap, jQuery
                                    </p>
                                </div>
                            </Work>
                        </div>
                    </div>
                </div>
            </AboutBox>
        )
    }
}
