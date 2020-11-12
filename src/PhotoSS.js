// src/PhotoSS.js

import React, { Component } from "react";
import Slider from "react-slick";

import pic1 from "./glitterShatter.jpg"
import pic2 from "./shardSmash.jpg"

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <div className="gradOverlay"></div>
        <Slider {...settings}>
          <div>
            <div className="slide-photo">
                <img src={pic1} />
            </div>
            <div className="gradOverlayRight"></div>
            <div className="gradOverlayLeft"></div>

            <div className="info">
                <p className='head'>TITLE 1</p>
                <p className='desc'>This photo is of consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
          <div>
            <div className="slide-photo">
                <img src={pic2} />
            </div>
            <div className="gradOverlayRight"></div>
            <div className="gradOverlayLeft"></div>
        
            <div className="info">
                <p className='head'>TITLE 2</p>
                <p className='desc'>This photo is of consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea. This photo is of consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
          <div>
            <div className="slide-photo">
                <img src={pic1} />
            </div>
            <div className="gradOverlayRight"></div>
            <div className="gradOverlayLeft"></div>
        
            <div className="info">
                <p className='head'>TITLE 3</p>
                <p className='desc'>This photo is of ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
          </div>
          <div>
            <div className="slide-photo">
                <span className='helper'></span>
                <img src={pic1} />
            </div>  
            <div className="gradOverlayRight"></div>
            <div className="gradOverlayLeft"></div>
        
            <div className="info">
                <p className='head'>TITLE 4</p>
                <p className='desc'>This photo is of consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}