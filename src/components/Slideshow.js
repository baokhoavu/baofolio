import React from "react";
import { Slide } from "react-slideshow-image";
import { Fade } from "react-slideshow-image";
// import "react-slideshow-image/dist/styles.css";
import a from "../assets/rcto/1.PNG";
import b from "../assets/rcto/2.PNG";
import c from "../assets/rcto/3.PNG";
import d from "../assets/rcto/4.PNG";
import e from "../assets/rcto/5.PNG";

const slideImages = [a, b, c, d, e];

const Slideshow = () => {
    return (
        <div className="slide-container">
            <Fade>
                <div className="each-fade">
                    <div className="image-container">
                        <img src={slideImages[0]} />
                    </div>
                    <h2>First Slide</h2>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <img src={slideImages[1]} />
                    </div>
                    <h2>Second Slide</h2>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <img src={slideImages[2]} />
                    </div>
                    <h2>Third Slide</h2>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <img src={slideImages[3]} />
                    </div>
                    <h2>Fourth Slide</h2>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <img src={slideImages[4]} />
                    </div>
                    <h2>Fifth Slide</h2>
                </div>
            </Fade>
        </div>
    );
};

export default Slideshow;
