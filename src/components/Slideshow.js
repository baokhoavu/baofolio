import React from "react";
import { Slide } from "react-slideshow-image";
import { Fade } from "react-slideshow-image";
import styled from "styled-components";
// import "react-slideshow-image/dist/styles.css";
import a from "../assets/rcto/1.PNG";
import b from "../assets/rcto/2.PNG";
import c from "../assets/rcto/3.PNG";
import d from "../assets/rcto/4.PNG";
import e from "../assets/rcto/5.PNG";

const slideImages = [a, b, c, d, e];

const SlideImage = styled.img`
    &.a {
        background-image: url(${a});
    }

    &.b {
        background-image: url(${b});
    }

    &.c {
        background-image: url(${c});
    }

    &.d {
        background-image: url(${d});
    }

    &.e {
        background-image: url(${e});
    }
`;

const Slideshow = () => {
    return (
        <div className="slide-container">
            <Fade>
                <div className="each-fade">
                    <div className="image-container">
                        <SlideImage className="a" />
                    </div>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <SlideImage className="b" />
                    </div>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <SlideImage className="c" />
                    </div>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <SlideImage className="d" />
                    </div>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <SlideImage className="e" />
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Slideshow;
