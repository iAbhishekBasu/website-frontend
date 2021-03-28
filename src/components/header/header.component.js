import React, { Component } from "react";
import { Link, Redirect, Switch, Route, NavLink } from "react-router-dom";
import "./header.css"

export default class Header extends Component {
	  constructor(props) {
	    super(props);
	    this.checkMedia = this.checkMedia.bind(this);
	    this.toggleHeader = this.toggleHeader.bind(this);

	    this.state = {
	    	color: 'transparent',
	    	isMobile: false,
	    	navnotActive: true,
	    	colortochange: "transparent"
	    };
	  }

	  listenScrollEvent = e => {
	    if (window.scrollY > 100) {
	      this.setState({color: '#49f'})
	    } else {
		    if(!this.state.isMobile){
		      this.setState({color: 'transparent'})
		    }
	    }
	  }

	  componentDidMount() {
	  	this.checkMedia();
	  	window.addEventListener('resize', () => {
	        this.setState({
	            isMobile: window.innerWidth < 1024
	        });
	        if(this.state.isMobile){
	        	this.setState({
		            color: "#49f"
		        });
	        }
	        else{
	        	this.setState({
		            color: "transparent"
		        });
	        }
	    }, false);
	     window.addEventListener('scroll', this.listenScrollEvent);
	  }
	  checkMedia(){
	  	if(window.innerWidth < 1024){
	  		this.setState({
	            isMobile: true,
	            color: "#49f"
	        });
	  	}
	  }
	  toggleHeader(){
	  	if(this.state.isMobile){
	  		if(this.state.navnotActive){
	  			this.setState({
	  				navnotActive : false,
	  				
	  			})
	  		}
	  		else{
	  			this.setState({
	  				navnotActive : true,
	  				
	  			})
	  		}
	  	}

	  }


	  render() {

	  	 return(


	  	 	<div>
	  	 	<Route>
			  	 <nav className={`navbar navbar-expand ${this.state.isMobile ? "small-screen-navbar" : ""}`} style={{backgroundColor: this.state.color}}>
			          <a href="#" className="navbar-brand">
			            IEEESBNITD
			          </a>
			          <button className={`header-burger ${this.state.isMobile ? "activate" : ""} ${this.state.navnotActive ? "" : "header-burger-active"}`} onClick={this.toggleHeader}>
			          </button>
			          <></>
			          <div className={`navbar-nav ${this.state.isMobile ? "small-screen-nav" : ""} ${this.state.isMobile && this.state.navnotActive ? "nav-deactive" : "nav-active"}`}>
			            <li className= "nav-item"><></>
			              <NavLink exact to={"/"} className="nav-link" activeclassName='active'>
			                Home
			              </NavLink>
			            </li>
			            <li className="nav-item">
			              <NavLink exact to={"/members"} className="nav-link" activeclassName='active'>
			                Team
			              </NavLink>
			            </li>
			            <li className="nav-item">
			              <NavLink exact to={"/alumni"} className="nav-link" activeclassName='active'>
			                Alumni
			              </NavLink>
			            </li>
			            <li className="nav-item">
			              <NavLink exact to={"/events"} className="nav-link" activeclassName='active'>
			                Activities
			              </NavLink>
			            </li>
			            <li className="nav-item">
			              <a href="#contact-us" className="nav-link">
			                Contact Us
			              </a>
			            </li>
			          </div>
			        </nav>
		       </Route>

	        </div>
	  	 		
	  	)
	  }
}

