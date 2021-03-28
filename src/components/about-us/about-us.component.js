import React, { Component } from "react";
import { Link, Redirect, Switch, Route } from "react-router-dom";
import "./aboutus.css"
import "../common.css"
import  poster from "../../media/images/initpic.png";
import Videomp4 from "../../media/video/ieeetrailer.mp4";
import Videowebm from "../../media/video/ieeetrailer.webm";
import VideoApp from "./Videoapp.js";

const videoJsOptions= {
				  autoplay: false,
				  controls: true,
				  poster: poster,
				  sources: [{
				    src: Videowebm,
				    type: "video/webm"
				  }]
				}
const VideAppoptions = {
	src: Videowebm,
	poster: poster
}

export default class AboutUs extends Component {
	  constructor(props) {
	    super(props);

	    this.state = {
	    
	    	
	    };
	  }

	  componentDidMount() {
	     
	  }



	  render() {

	  	 return(
	  	 	<div className="main-container about-us p-1" id="about-us">
	  	 		
	  	 		<div className="row p-3 ml-0 mr-0">
		  	 		<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 content-wrapper">
		  	 			<h2 className="special-headers"> About Us </h2>  
				  	 	
				  	 	<p className="p-2 pl-3">	The IEEE Student Branch , NIT Durgapur is a society of enthusiasts aimed at promoting research-related
			            activities in the campus. We are a direct handshake to IEEE, an international body that allows countless
			            young researchers the opportunity to present &amp; publish their innovations every year. Comprising of
			            bright researchers, developers, speakers, and other contributors we are a society that welcomes in the era
			            of better research prospects, on the campus.
			            </p>
		  	 		</div>
		  	 		<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 video-container">
		  	 			
		  	 			<div className="video-wrapper "> <VideoApp {...VideAppoptions} /> </div>
		  	 		</div>
	  	 		</div>
	  	 	</div>
	  	 )


	}
}

