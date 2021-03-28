import React, { Component } from "react";
import "./landing.css"
import SlideShow from "../landing-slider/landing.slider.component"
import imgslider3 from "../../media/images/1jVCptT5.png"


class Landing extends Component {
  
  render() {
      return (
        <div className="text-center main-container">
          <SlideShow
            autoPlay={true}
            activeSlideDuration={30000}
            interactionMode="swipe"
            alignCaption="center"
            alignIndicators="center"
            indicatorsColor="#fff"
            useRightLeftTriangles={false}
            rightTriangleColor="#fff"
            leftTriangleColor="#fff"
            rightIcon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                <path d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z" />
              </svg>
            }
          >
            <div>
              <div className="main-slide">
                  <div className="slide-background-image firstSlider slider-data">
                        <div>
                          <p>Where</p>
                          <span> <font>Technology</font> and <font>Research</font> brews</span>
                        </div>

                  </div>
              </div>
            </div>
            <div>
              <div className="main-slide">
                  <div className="slide-background-image secondSlider slider-data">
                        <div>
                          <p>Where</p>
                          <span> <font>Inspiration</font> breeds <font>Success</font></span>
                        </div>

                  </div>
              </div>
            </div>
            <div>
              <div className="main-slide">
                  <div className="slide-background-image thirdSlider">
                        

                  </div>
                  <div className="main-content">
                      <img src={imgslider3} className="slider-img" />
                  </div>
              </div>
            </div>
          </SlideShow>
          <aside>
            <nav>
              <a href="https://www.facebook.com/nitdgpieeesociety/?ref=br_rs" target="_blank">
                <i class="text fa fa-facebook-f"></i>

              </a>
              <a href="https://www.instagram.com/ieeesb_nitdgp/" target="_blank">
                <i class="text fa fa-instagram"></i>

              </a>
              <a href="https://www.linkedin.com/company/ieeesbnitdgp/about/" target="_blank">
                <i class="text fa fa-linkedin"></i>

              </a>

            </nav>
        </aside>
        </div>
      )
  }
}

export default Landing;




















