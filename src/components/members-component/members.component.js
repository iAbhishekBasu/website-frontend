import React, { Component } from "react";
import { Link, Redirect, Switch, Route } from "react-router-dom";
import "../common.css"
import "./members.css"
import Batch2021 from "../../data/batch2021"
import Batch2022 from "../../data/batch2022"
import Batch2023 from "../../data/batch2023"

import nkr from "../../media/faculty/NKRsir.jpg"
import ac from "../../media/faculty/ACsir.jpg"
import ck from "../../media/faculty/CKsir.jpg"

export default class Memebrs extends Component {
	  constructor(props) {
	    super(props);
	    this.activate = this.activate.bind(this);
	    this.toggleDockClass = this.toggleDockClass.bind(this);
	    this.state = {
	    	activedata: Batch2021,
	    	isactive2021: true,
	    	isactive2022: false,
	    	isactive2023: false,
	    	imageHash: Date.now(),
	    	dockstatus: false,
	    	togglestring: ">"
	    };
	  }


	  componentDidMount() {
	  }
	  activate(year){
	  	this.setState({
	  		isactive2021: false,
	    	isactive2022: false,
	    	isactive2023: false

	  	})
	  		if(year == 2022){
	  			this.setState({
	  				activedata: Batch2022,
	  				isactive2022: true
	  			})
	  		}
	  		else if(year == 2023){
	  			this.setState({
	  				activedata: Batch2023,
	  				isactive2023: true
	  			})
	  		}
	  		else{

	  			this.setState({
	  				activedata: Batch2021,
	  				isactive2021: true
	  			})
	  		}
	  }

	  toggleDockClass(){
	  	
  		this.setState(state =>({
  			dockstatus: !state.dockstatus,

  		}))
  		if(this.state.dockstatus){
  			this.setState({
  				togglestring: ">"
  			})
  		}
  		else{
  			this.setState({
  				togglestring: "<"
  			})
  		}
	  	
	  }


	  render() {
	  	
	  	
	  	 return(
	  	 	<div className="text-center main-container">
	        	<div className="jumbotron banner border-0 rounded-0">
	        		<h1 className="display-3 text-light"> Members </h1>
	        	</div>
	        	<div className="container mt-4">
	        		<div className="facad">
	        			<div className="facad-card-group">
	        				<div className="card facad-card">

		  	 						<div className="image-wrapper">
						  				<img className="card-img-top" key={Date.now()} src={nkr} alt="Profile_pic"/>
						  			</div>
						  			
						  			
		  	 						
		  	 						<div className="card-body text-center">
		  	 							<h4 className="card-title title heading2"> Nirmal Kumar Roy </h4>
		  	 							<p className="lead text-muted"> Branch Counselor</p>
		  	 							<p className="lead text-muted small">
		  	 										Professor,Department of Electrical Engineering
		  	 										<p>NIT Durgapur,West Bengal,India</p> 
		  	 							</p>

		  	 						</div>
		  	 					</div>
	        			</div>
	        			<div className="facad-card-group row ml-0 mr-0">
	        					<div className="col-12 col-sm-12 col-md-6 col-lg-6 ">
	        						<div className="card facad-card">

			  	 						<div className="image-wrapper">
							  				<img className="card-img-top" key={Date.now()} src={ac} alt="Profile_pic"/>
							  			</div>
							  			
							  			
			  	 						
			  	 						<div className="card-body text-center">
			  	 							<h4 className="card-title title heading2"> Aniruddha Chandra </h4>
			  	 							<p className="lead text-muted">Faculty Advisor </p>
			  	 							<p className="lead text-muted small">
			  	 										Professor ,Department of Electronics and Communication Engineering
			  	 										<p>NIT Durgapur,West Bengal,India</p>
			  	 							</p> 
			  	 						</div>
			  	 					</div>
	        					</div>
		  	 					<div className="col-12 col-sm-12 col-md-6 col-lg-6 ">
			  	 					<div className="card facad-card">

			  	 						<div className="image-wrapper">
							  				<img className="card-img-top" key={Date.now()} src={ck} alt="Profile_pic"/>
							  			</div>
							  			
							  			
			  	 						
			  	 						<div className="card-body text-center">
			  	 							<h4 className="card-title title heading2"> Chiranjib Koley </h4>
			  	 							<p className="lead text-muted">Faculty Advisor</p>
			  	 							<p className="lead text-muted small">
			  	 										Professor,Department of Electrical Engineering
			  	 										<p>NIT Durgapur,West Bengal,India</p> 
			  	 							</p>
			  	 						</div>
			  	 					</div>
		  	 					</div>
	        			</div>
	        		</div>
	        	</div>
		  	 	<div className="container mt-4">
		  	 		

		  	 		<div className="button-wrapper d-flex justify-content-around">
		  	 			<button className={`btn pl-3 pr-3 btn-primary ${this.state.isactive2021 ? "active btn-secondary" : ""}`} onClick={() => this.activate(2021)}> Final  Year </button>
		  	 			<button className={`btn pl-3 pr-3 btn-primary ${this.state.isactive2022 ? "active btn-secondary" : ""}`} onClick={() => this.activate(2022)}> Third  Year </button>
		  	 			<button className={`btn pl-3 pr-3 btn-primary ${this.state.isactive2023 ? "active btn-secondary" : ""}`} onClick={() => this.activate(2023)}> Second  Year </button>
		  	 		</div>
		  	 		<nav className="side-dock" >
		  	 			<div className={`side-dock-options ${this.state.dockstatus ? "active-dock" : "" }`}>
		  	 				<button className={`pl-3 pr-3 ${this.state.isactive2021 ? "active-nav-link" : ""}`} onClick={() => this.activate(2021)}> Final  Year </button>
		  	 				<button className={`pl-3 pr-3 ${this.state.isactive2022 ? "active-nav-link" : ""}`} onClick={() => this.activate(2022)}> Third  Year </button>
		  	 				<button className={`pl-3 pr-3 ${this.state.isactive2023 ? "active-nav-link" : ""}`} onClick={() => this.activate(2023)}> Second  Year </button>
		  	 			</div>
		  	 			<button className="dock-opener" onClick={ this.toggleDockClass }> {this.state.togglestring} </button>
		  	 		</nav>
		  	 		<div className="row m-1 ">
		  	 			{this.state.activedata && this.state.activedata.map((member, index) => (
		  	 				<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
		  	 					<div className="card">

		  	 						<div className="image-wrapper">
						  				<img className="card-img-top" key={Date.now()} src={ `${ member.img.default }`} alt="Profile_pic"/>
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
		  	</div>
	  	 )


	}
}

