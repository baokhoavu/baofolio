// Imports
import React, { Component } from 'react';
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

    @media screen and (max-width: 967px) {
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
                                <span>Projects</span>
                            </h1>
                            <h2></h2>
                        </div>
                    </div>
                </div>
            </AboutBox>
        )
    }
}
