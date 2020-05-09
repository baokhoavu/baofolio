// Imports
import React, { Component } from 'react';
// import styled from 'styled-components';
// import logo from '../logo.svg';
import styled from 'styled-components';
import '../App.css';

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
    }

    span {
        color: #0c547d;
    }

    @media screen and (max-width: 967px) {
        > div > div > div {
            width: 100%;
        }

        > div > div> div:nth-child(2) {
            margin-top: 0;
        }
    }

    @media screen and (max-width: 768px) {
        height: 100%;
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
                                <span>Technology</span>
                            </h1>
                            <p>
                                Angular 9
                            </p>
                            <p>
                                ReactJS
                            </p>
                            <p>
                                Styled Components
                            </p>
                            <p>
                                NextJs
                            </p>
                            <p>
                                Typescript
                            </p>
                            <p>
                                MongoDB/Mongoose
                            </p>
                            <p>
                                Node/Express
                            </p>
                            <p>
                                Bootstrap 3/4
                            </p>
                            <p>
                                JavaScript/jQuery
                            </p>
                            <p>
                                Foundation/Responsive Emails
                            </p>
                            <p>
                                Wordpress/Liquid/Sage
                            </p>
                            <p>
                                Blackbaud Luminute
                            </p>
                            <p>
                                Rallybound
                            </p>
                        </div>
                        <div>
                            <h1>
                                <span>Experience</span>
                            </h1>
                            <h2>
                                <span>4</span> years in Web Development
                            </h2>
                            <h2>
                                <span>3</span> years in Front End Development
                            </h2>
                        </div>
                    </div>
                </div>
            </AboutBox>
        )
    }
}
