import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={require("../../Images/slide1.svg").default} />
                    <p className="legend">Accelarte your Entire Mobile Team Workflow</p>
                </div>
                <div>
                    <img src={require("../../Images/slide.svg").default}/>
                    <p className="legend">The Most Comperhensive Bug Reporing tool for <br/> Mobile Apps</p>
                </div>
                <div>
                    <img src={require("../../Images/slide3.svg").default} />
                    <p className="legend">Secure Crash Reporting With Real-Time Alerts</p>
                </div>
            </Carousel>
        );
    }
};
export default DemoCarousel