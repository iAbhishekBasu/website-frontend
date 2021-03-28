import React, { Component } from "react";
import { Link, Redirect, Switch, Route } from "react-router-dom";
import "../common.css"
import "./info-ieee.css"
import bgImg from "../../media/images/bg-sec-2.svg"


export default class InfoIEEE extends Component {
	  constructor(props) {
	    super(props);

	    this.state = {

	    	bgsec:bgImg
	    
	    	
	    };
	  }

	  componentDidMount() {
	     
	  }



	  render() {

	  	 return(
	  	 	<div className="main-container p-3 ieee-info" style={{backgroundImage: ` linear-gradient(rgba(245, 245, 245,0.94), rgba(245, 245, 245,0.94)), url(${this.state.bgsec})`}}>
	  	 		<div className="p-3">
		  	 	<h2 className="special-headers"> About IEEE </h2>  
		  	 	<p className="p-3">
		  	 		IEEE is the world’s largest professional association dedicated to advancing technological innovation and excellence for the benefit of humanity.When you join IEEE, you join a community of over 425,000 technology and engineering professionals united by a common desire to continuously learn, interact, collaborate, and innovate. IEEE Membership provides you with the resources and opportunities you need to keep on top of changes in technology; get involved in standards development; network with other professionals in your local area or within a specific technical interest; mentor the next generation of engineers and technologists, and so much more.

					For more info about IEEE visit ieee.org	.
	            </p>
	  	 		</div>
	  	 		<div className="container-cover mw-80" >
		  	 		<div className="row ml-0 mr-0">
		  	 			<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 p-2 card m-0 border-0">
		  	 				<div className="card h-100">
			  	 				<div className="card-img-top jumbotron text-center theme-ieee-bg mb-0 rounded-0">
						  			<h2 className="text-light sub-special-headers"> IEEE membership </h2>  
						  		</div>
			  	 				<div className="card-body">
			  	 				
			  	 			    <p className="p-3 pt-0 card-text text-center">
			  	 			    	To join this community of over 425,000 technology and engineering professionals united by a common desire to continuously learn, interact, collaborate, and innovate visit ieee/membership and obtain your membership at the earliest.
			  	 			    </p>
			  	 				</div>
		  	 				</div>
		  	 			</div>
		  	 			<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 p-2 card m-0 border-0">
		  	 				<div className="card h-100">
			  	 				<div className="card-img-top jumbotron text-center theme-ieee-bg mb-0 rounded-0">
						  			<h2 className="text-light sub-special-headers"> IEEE Societies </h2>  
						  		</div>
			  	 				<div className="card-body">
			  	 				
			  	 			    <p className="p-3 pt-0 card-text text-center">
			  	 			    	IEEE Society members stay technically current, network with colleagues locally and abroad, and collaborate on research and projects with leading experts -- all while taking advantage of specialized opportunities.To know about the various IEEE societies visit ieee/societies.
			  	 			    </p>
			  	 				</div>
		  	 				</div>
		  	 			</div>
		  	 		</div>
	  	 		</div>
	  	 		
	  	 	</div>
	  	 )


	}
}

