import React, { Component } from "react";
import { Link, Redirect, Switch, Route } from "react-router-dom";
import "../common.css"
import "./insight.css"
import insightimg from "../../media/images/insight.png"



export default class Insight extends Component {
	  constructor(props) {
	    super(props);
	    
	    this.state = {
	    	
	    	
	    };
	  }

	  componentDidMount() {
	     
	  }
	  


	  render() {

	  	 return(
	  	 	<div className="main-container insight-container">
	  	 		<h2 className="special-headers"> Our Blog </h2> 
	  	 		<div className="row insight-content ml-0 mr-0">
	  	 			<div className="col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12 wrapper-content">
	  	 				<div className="p-3"> 
	  	 					<p className="full-content">Learning has no limit and curiosity has no bound. <font className="font-mid-plus"> IEEE SB NITD </font> strives to do it's bit in alleviating your mind’s scientific curiosity by bringing you 
	  	 					 <p className="custom-text"><font className="font-plus"> Insight </font> - The official blog of IEEE SB NITD.</p> </p>
	  	 				</div>
	  	 			</div>
	  	 			<div className="col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12 img-container">
	  	 				<div className="wrapper-img">
	  	 					<img className="img-fluid" src={insightimg}/>
	  	 				</div>
	  	 			</div>
	  	 		</div>
	  	 		
	  	 	</div>
	  	 )


	}
}

