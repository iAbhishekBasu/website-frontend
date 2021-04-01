import React, { Component } from "react";
import { Link, Redirect, Switch, Route } from "react-router-dom";
import "../common.css"
import Batch2019 from "../../data/batch2019"

export default class Alumni extends Component {
	  constructor(props) {
	    super(props);
	    this.func = this.func.bind(this);
	    this.state = {
	    	
	    };
	  }


	  componentDidMount() {
	  	console.log(Batch2019);
	  	this.func();
	  }
	  func(){
	  	
	  	
	  }


	  render() {
	  	
	  	
	  	 return(
	  	 	<div className="main-container">
	  	 		<div className="jumbotron banner border-0 rounded-0">
	        		<h1 className="display-3 text-light text-center"> Alumni </h1>
	        	</div>
	  	 		<div className="container row m-1 ">
	  	 			{Batch2019 && Batch2019.map((member, index) => (
	  	 				<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
	  	 					<div className="card">

	  	 						<div className="image-wrapper">
					  				<img className="card-img-top" src={ `${ member.img.default }`} />
					  			</div>
					  			
					  			
	  	 						
	  	 						<div className="card-body text-center">
	  	 							<h4 className="card-title title heading2"> {member.name} </h4>
	  	 							<p className="lead text-muted small"> {member.post}</p>
	  	 						</div>
	  	 					</div>
	  	 				</div>

	  	 				))}
	  	 		</div>
	  	 	</div>
	  	 )


	}
}

