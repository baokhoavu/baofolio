import React from "react";
import { Fade } from "react-slideshow-image";
import styled from "styled-components";
// import "react-slideshow-image/dist/styles.css";
import a from "../assets/causeforce/1.PNG";
import b from "../assets/causeforce/2.PNG";
import c from "../assets/causeforce/3.PNG";
import d from "../assets/causeforce/4.PNG";
import e from "../assets/causeforce/5.PNG";
import f from "../assets/causeforce/6.PNG";

const slideImages = [a, b, c, d];

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

    &.f {
        background-image: url(${f});
    }
`;

const SlideShowCf = () => {
    return (
        <div className="slide-container">
            <Fade>
                <div className="each-fade">
                    <div className="image-container">
                        <SlideImage className="a" />
                    </div>
                    <h2>First Slide</h2>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <SlideImage className="b" />
                    </div>
                    <h2>Second Slide</h2>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <SlideImage className="c" />
                    </div>
                    <h2>Third Slide</h2>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <SlideImage className="d" />
                    </div>
                    <h2>Fourth Slide</h2>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <SlideImage className="e" />
                    </div>
                    <h2>Fifth Slide</h2>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <SlideImage className="f" />
                    </div>
                    <h2>Sixth Slide</h2>
                </div>
            </Fade>
        </div>
    );
};

export default SlideShowCf;
