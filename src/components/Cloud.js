// Imports
import React, { Component } from "react";
import styled from "styled-components";
import "../App.css";

const Clouds = styled.div`
  width: 100%;
  min-height: 500px;
  margin-bottom: 500px;
  padding-bottom: 500px;
  display: block !important;
  position: relative !important;
  background: linear-gradient(
    135deg,
    rgba(33, 36, 129, 1) 0%,
    rgba(34, 37, 130, 1) 28%,
    rgba(151, 43, 139, 1) 73%,
    rgba(152, 44, 140, 1) 98%
  );

  min-width: 1080px;
  margin: 0 auto;

  // Cloud Container
  //   padding: 100px 0;
  //   background: #c9dbe9;
  //   background: -webkit-linear-gradient(top, #c9dbe9 0%, #fff 100%);
  //   background: -linear-gradient(top, #c9dbe9 0%, #fff 100%);
  //   background: -moz-linear-gradient(top, #c9dbe9 0%, #fff 100%);

  //   div {
  //     width: 200px;
  //     height: 60px;
  //     background: #fff;
  //     border-radius: 200px;
  //     -moz-border-radius: 200px;
  //     -webkit-border-radius: 200px;
  //     position: relative;
  //   }

  //   .cloud:before,
  //   .cloud:after {
  //     content: "";
  //     position: absolute;
  //     background: #fff;
  //     width: 100px;
  //     height: 80px;
  //     position: absolute;
  //     top: -15px;
  //     left: 10px;

  //     border-radius: 100px;
  //     -moz-border-radius: 100px;
  //     -webkit-border-radius: 100px;

  //     -webkit-transform: rotate(30deg);
  //     transform: rotate(30deg);
  //     -moz-transform: rotate(30deg);
  //   }

  //   .cloud:after {
  //     width: 120px;
  //     height: 120px;
  //     top: -55px;
  //     left: auto;
  //     right: 15px;
  //   }

  //   /*Time to animate*/
  //   .x1 {
  //     -webkit-animation: moveclouds 15s linear infinite;
  //     -moz-animation: moveclouds 15s linear infinite;
  //     -o-animation: moveclouds 15s linear infinite;
  //   }

  //   /*variable speed, opacity, and position of clouds for realistic effect*/
  //   .x2 {
  //     left: 200px;

  //     -webkit-transform: scale(0.6);
  //     -moz-transform: scale(0.6);
  //     transform: scale(0.6);
  //     opacity: 0.6; /*opacity proportional to the size*/

  //     /*Speed will also be proportional to the size and opacity*/
  //     /*More the speed. Less the time in 's' = seconds*/
  //     -webkit-animation: moveclouds 25s linear infinite;
  //     -moz-animation: moveclouds 25s linear infinite;
  //     -o-animation: moveclouds 25s linear infinite;
  //   }

  //   .x3 {
  //     left: -250px;
  //     top: -200px;

  //     -webkit-transform: scale(0.8);
  //     -moz-transform: scale(0.8);
  //     transform: scale(0.8);
  //     opacity: 0.8; /*opacity proportional to the size*/

  //     -webkit-animation: moveclouds 20s linear infinite;
  //     -moz-animation: moveclouds 20s linear infinite;
  //     -o-animation: moveclouds 20s linear infinite;
  //   }

  //   .x4 {
  //     left: 470px;
  //     top: -250px;

  //     -webkit-transform: scale(0.75);
  //     -moz-transform: scale(0.75);
  //     transform: scale(0.75);
  //     opacity: 0.75; /*opacity proportional to the size*/

  //     -webkit-animation: moveclouds 18s linear infinite;
  //     -moz-animation: moveclouds 18s linear infinite;
  //     -o-animation: moveclouds 18s linear infinite;
  //   }

  //   .x5 {
  //     left: -150px;
  //     top: -150px;

  //     -webkit-transform: scale(0.8);
  //     -moz-transform: scale(0.8);
  //     transform: scale(0.8);
  //     opacity: 0.8; /*opacity proportional to the size*/

  //     -webkit-animation: moveclouds 20s linear infinite;
  //     -moz-animation: moveclouds 20s linear infinite;
  //     -o-animation: moveclouds 20s linear infinite;
  //   }

  //   @-webkit-keyframes moveclouds {
  //     0% {
  //       margin-left: 1000px;
  //     }
  //     100% {
  //       margin-left: -1000px;
  //     }
  //   }
  //   @-moz-keyframes moveclouds {
  //     0% {
  //       margin-left: 1000px;
  //     }
  //     100% {
  //       margin-left: -1000px;
  //     }
  //   }
  //   @-o-keyframes moveclouds {
  //     0% {
  //       margin-left: 1000px;
  //     }
  //     100% {
  //       margin-left: -1000px;
  //     }
  //   }

  //   @media screen and (max-width: 1280px) {
  //     min-width: 760px;
  //   }
`;

export default class CloudsImport extends Component {
  render() {
    return (
      <div>
        <Clouds>
          <div class="cloud x1"></div>
          <div class="cloud x2"></div>
          <div class="cloud x3"></div>
          <div class="cloud x4"></div>
          <div class="cloud x5"></div>
        </Clouds>
      </div>
    );
  }
}
