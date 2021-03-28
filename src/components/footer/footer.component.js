import React, { Component } from "react";
import { Link, Redirect, Switch, Route, NavLink } from "react-router-dom";
import "../common.css"
import "./footer.css"
import ieeelogo from "../../media/images/ieeesb_logo_theme.svg"

import facebook from "../../media/icons/fb.svg"
import instagram from "../../media/icons/instagram.svg"
import linkedin from "../../media/icons/linkedin.svg"


export default class Footer extends Component {
	  constructor(props) {
	    super(props);
	    this.checkMedia = this.checkMedia.bind(this);

	    this.state = {
	    	isMobile: false
	    };
	  }

	  componentDidMount() {
	  	this.checkMedia();
	  	window.addEventListener('resize', () => {
	        this.setState({
	            isMobile: window.innerWidth < 1024
	        });
	        
	    }, false);
	     
	  }
	  checkMedia(){
	  	if(window.innerWidth < 1024){
	  		this.setState({
	            isMobile: true
	        });
	  	}
	  }
	  


	  render() {

	  	 return(


	  	 	<div className="main-container footer footer-container">
		  	 	
		  	 	<div className="row ml-0 mr-0">
		  	 		<div className="col-lg-4 col-md-4 col-sm-12 col-12 footer-division">
		  	 			<h3 className="footer-logo-container"> 
		  	 				<img src={ieeelogo} alt="IEEESBNITD" className="footer-logo"/> 
		  	 			</h3>
		  	 			<div className="content-group">
		  	 				<p>
		  	 					The IEEE Student Branch, NIT Durgapur is a society of enthusiasts aimed at promoting research-related activities in the campus .Comprising of bright researchers, developers, speakers, and other contributors we are a society that welcomes in the era of better research prospects, on the campus.
		  	 				</p>
		  	 			</div>
		  	 		</div>
		  	 		<div className="col-lg-4 col-md-4 col-sm-12 col-12 footer-division">
		  	 			<div className="text-wrapper-about">
			  	 			<h3 className="division-heading"> 
			  	 				About
			  	 			</h3>
			  	 			<div className="content-group">
			  	 				<ul>
			  	 					<li className="">
				  	 					<a href="#about-us" className="nav-link">
							                About Us
							            </a>
			  	 					</li>
			  	 					<li className="">
				  	 					<a href="https://www.ieee.org/" className="nav-link"  target="_blank">
							                About IEEE
							            </a>
			  	 					</li>
			  	 					<li className="">
				  	 					<Link to={"/events"} className="nav-link">
							                Our Activities
							            </Link>
			  	 					</li>
			  	 					<li className="">
				  	 					<Link to={"/members"} className="nav-link">
							                Our Team
							            </Link>
			  	 					</li>
			  	 				</ul>
			  	 			</div>
		  	 			</div>		  	 		
		  	 		</div>
		  	 		<div className="col-lg-4 col-md-4 col-sm-12 col-12 footer-division d-flex align-items-center">
		  	 			
		  	 			<div className="content-group">
						  	 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.5780853572996!2d87.29095021481118!3d23.547672784689695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f772081cede5e9%3A0x33fb9ccb243dfa5!2sNational%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1570224535721!5m2!1sen!2sin" height="200" frameborder="0" allowfullscreen=""></iframe>
		  	 			</div>
		  	 		</div>
		  	 	</div>
	  	 	</div>
	  	 		
	  	)
	  }
}

