// Imports
import React, { Component } from "react";
// import styled from 'styled-components';
// import logo from '../logo.svg';
import styled from "styled-components";
import "../App.css";

const AboutBox = styled.div`
    width: 100%;
    height: 100vh;
    background: #282c34;

    > div > div {
        width: 50%;
        height: 100%;
        padding-top: 20px;
        margin: 0 auto;
        display: flex;
    }

    > div > div > div {
        // margin-top: 10%;
        display: inline-block;
        width: 50%;

        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    > div > div > div > p {
        font-weight: bold;
        color: #fff;
    }

    > div > div > div > h2 {
        font-weight: bold;
        color: #fff;
        font-size: 18px;
    }

    > div > div > div > h2:nth-child(3),
    > div > div > div > h2:nth-child(4) {
        font-size: 16px;

        span {
            font-size: 21px;
        }
    }

    > div > div > div > h2 span {
        font-size: 25px;
    }

    > div > div > div > li {
        color: #fff;
    }

    span {
        color: #0c547d;

        &.title {
            color: rgba(197, 239, 247, 1);
        }
    }

    @media screen and (max-width: 967px) {
        > div > div > div {
            width: 100%;
        }

        > div > div > div:nth-child(2) {
            margin-top: 0;
        }
    }

    @media screen and (max-width: 768px) {
        height: 100%;
    }
`;

// About Class Component
export default class About extends Component {
    render() {
        return (
            <AboutBox>
                <div>
                    <div>
                        <div>
                            <h1>
                                <span className="title">Skills</span>
                            </h1>
                            <p>Angular 9</p>
                            <p>ReactJS</p>
                            <p>Styled Components</p>
                            <p>NextJs</p>
                            <p>Typescript</p>
                            <p>MongoDB/Mongoose</p>
                            <p>Node/Express</p>
                            <p>Bootstrap 3/4</p>
                            <p>JavaScript/jQuery</p>
                            <p>Foundation/Responsive Emails</p>
                            <p>Wordpress/Liquid/Sage</p>
                            <p>Blackbaud Luminute</p>
                            <p>Rallybound</p>
                        </div>
                        <div>
                            <h1>
                                <span className="title">Experience</span>
                            </h1>
                            <h2>
                                <span>Lead Developer</span> 2018 ~ Present,
                                Causeforce
                            </h2>
                        </div>
                    </div>
                </div>
            </AboutBox>
        );
    }
}
