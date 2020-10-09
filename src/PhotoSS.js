// src/PhotoSS.js

import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <div className="slide-photo">
                <span className='helper'></span>
                <img src="glitterShatter.jpg" />
                <p>This photo is of consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
          <div>
            <img />
          </div>
          <div>
            <img />
          </div>
          <div>
            <img />
          </div>
        </Slider>
      </div>
    );
  }
}