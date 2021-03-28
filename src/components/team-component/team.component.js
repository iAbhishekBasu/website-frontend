import React, { Component } from "react";
import { Link, Redirect, Switch, Route } from "react-router-dom";
import "../common.css"
import "./team.css"
import Batch2021 from "../../data/batch2021"



export default class Team extends Component {
	  constructor(props) {
	    super(props);

	    this.state = {
	    	teamlist: Batch2021.slice(0,4)
	    	
	    };
	  }

	  componentDidMount() {
	     
	  }



	  render() {

	  	 return(
	  	 	<div className="main-container mt-3 team-container">
	  	 		<h2 className="special-headers"> Our Team </h2> 
	  	 		<div className="row ml-0 mr-0">
	  	 			{this.state.teamlist && this.state.teamlist.map((member, index) => (
	  	 					<div className="col-lg-3 col-md-3 col-sm-6 col-12 team-member p-1 align-self-stretch">
	  	 						<div className="card">
	  	 							<div className="image-wrapper">
	  	 								<img className="card-img-top" key={Date.now()} src={ `${ member.img.default }`} />
	  	 							</div>
	  	 							<div className="card-body text-center">
	  	 								<div className="title display">
	  	 									{member.name}
	  	 								</div>
	  	 								<div className="card-text text-muted">
	  	 									{member.post}
	  	 								</div>
	  	 								<div className="links-container">
	  	 									<ul>
	  	 									   <li>
	  	 									   	<a href={member.fb} target="_blank">
	  	 									   		fb
	  	 									   	</a>
	  	 									   </li>
	  	 									   <li>
	  	 									   	<a href={member.insta} target="_blank">
	  	 									   		In
	  	 									   	</a>
	  	 									   </li>
	  	 									   <li>
	  	 									   	<a href={member.linkedin} target="_blank">
	  	 									   		ln
	  	 									   	</a>
	  	 									   </li>
	  	 									</ul>
	  	 								</div>
	  	 							</div>
	  	 						</div>
	  	 					</div>

	  	 				))}
	  	 		</div>
	  	 		
	  	 	</div>
	  	 )


	}
}

