import React, { Component } from "react";
import { Link, Redirect, Switch, Route } from "react-router-dom";
import "../common.css"
import "./home-activities.css"
import techx1 from "../../media/images/techx-i.webp"
import techx2 from "../../media/images/techx-ii.webp"
import techx3 from "../../media/images/techx-iii.webp"

import sdv1 from "../../media/images/sdv-1.jpg"
import sdv2 from "../../media/images/sdv-2.jpg"
import sdv3 from "../../media/images/sdv-3.jpg"

import intelli1 from "../../media/images/intelli-1.jpg"
import intelli2 from "../../media/images/intelli-2.webp"
import intelli3 from "../../media/images/intelli-3.jpg"

export default class ActivitiesHome extends Component {
	  constructor(props) {
	    super(props);
	    this.imageClick = this.imageClick.bind(this);
	    this.state = {
	     techxcover: techx1,
	     sdvcover: sdv1,
	     intellicover: intelli1
	    	
	    };
	  }

	  componentDidMount() {

	     this.imageClick(1);
	  }
	  imageClick(id, imagetochange){
	  	if(imagetochange == "techx")
	  	{
	  		if(id==1){
		  		this.setState({
		  			techxcover: techx1
		  		})
		  	}
		  	else if(id==2){
		  		this.setState({
		  			techxcover: techx2
		  		})
		  	}
		  	else{
		  		this.setState({
		  			techxcover: techx3
		  		})
		  	}
	  	}
	  	else if(imagetochange == "sdv")
	  	{
	  		if(id==1){
		  		this.setState({
		  			sdvcover: sdv1
		  		})
		  	}
		  	else if(id==2){
		  		this.setState({
		  			sdvcover: sdv2
		  		})
		  	}
		  	else{
		  		this.setState({
		  			sdvcover: sdv3
		  		})
		  	}
	  	}
	  	else if(imagetochange == "intelli")
	  	{
	  		if(id==1){
		  		this.setState({
		  			intellicover: intelli1
		  		})
		  	}
		  	else if(id==2){
		  		this.setState({
		  			intellicover: intelli2
		  		})
		  	}
		  	else{
		  		this.setState({
		  			intellicover: intelli3
		  		})
		  	}
	  	}
	  }



	  render() {

	  	 return(
	  	 	<div className="main-container p-3">
	  	 	<h2 className="special-headers mb-5 m-3"> Activities </h2> 
	  	 		<div className="mw-80">
		  	 		<div className="row mr-1 ml-1 border bdr-25 actiWrappers">
		  	 			<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 pl-0 mpad-0">
		  	 				<div className="row mr-0 ml-0 mpad-1">
		  	 					<div className="cover-img mpad-0 col-9 col-xs-9 col-sm-9 col-md-12 col-lg-12">
		  	 						<img className="img-100" src={this.state.techxcover} />
		  	 					</div>
		  	 					<div className="row mpad-0 mr-0 ml-0 col-3 col-xs-3 col-sm-3 col-md-12 col-lg-12">
		  	 						<div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 p-0">
		  	 							<img className="img-100 img-click" src={techx1} onClick={() => this.imageClick(1, "techx")}/>
		  	 						</div>
		  	 						<div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 p-0">
		  	 							<img className="img-100 img-click" src={techx2} onClick={() => this.imageClick(2, "techx")} />
		  	 						</div>
		  	 						<div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 p-0">
		  	 							<img className="img-100 img-click" src={techx3} onClick={() => this.imageClick(3, "techx")} />
		  	 						</div>
		  	 					</div>
		  	 				</div>
		  	 			</div>
		  	 			<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
		  	 				<h2 className="special-sub-headers text-dark">
		  	 					TechX 2020
		  	 				</h2>

		  	 				<div className="p-2 row">
		  	 					<div className="p-3 pt-1 pb-4">
		  	 						IEEE COMPUTER SOCIETY SYP MGAB in collaboration with IEEE SB NIT Durgapur and IEEE SB Jadavpur University hosted the IEEE TechX Congress 2020: Eastern India Techno-Management Leadership Summit on 28th Feb - 1st March 2020, where it assimilated all students and Young Professionals from various IEEE Sections and students branches.
		  	 					</div>
		  	 					<div className="w-100 p-0">
		  	 						<nav className="p-1 d-flex">
		  	 							
		  	 								<p className="pl-0">Visit Website</p>
		  	 								<p className="ml-auto pr-2">Visit FB Page</p>
		  	 							
		  	 						</nav>
		  	 					</div>
		  	 				</div>
		  	 			</div>
		  	 		</div>
	  	 		</div>

	  	 		<div className="row mw-80">
		  	 		<div className=" col-12 col-sm-12 col-md-6 col-lg-6 p-2">
			  	 		<div className="row ml-0 mr-0 border bdr-25 actiWrappers">
			  	 			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 pl-0 p-0">
			  	 				<div className="d-flex p-1">
			  	 					<div className="cover-img p-0 col-9 col-xs-9 col-sm-9 col-md-9 col-lg-9">
			  	 						<img className="img-100" src={this.state.intellicover} />
			  	 					</div>
			  	 					<div className="row ml-0 mr-0 p-0 mr-0 ml-0 col-3 col-xs-3 col-sm-3 col-md-3 col-lg-3">
			  	 						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 p-0">
			  	 							<img className="img-100 img-click" src={intelli1} onClick={() => this.imageClick(1, "intelli")}/>
			  	 						</div>
			  	 						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 p-0">
			  	 							<img className="img-100 img-click" src={intelli2} onClick={() => this.imageClick(2, "intelli")} />
			  	 						</div>
			  	 						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 p-0">
			  	 							<img className="img-100 img-click" src={intelli3} onClick={() => this.imageClick(3, "intelli")} />
			  	 						</div>
			  	 					</div>
			  	 				</div>
			  	 			</div>
			  	 			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			  	 				<h2 className="special-sub-headers text-dark">
			  	 					IntelliSys
			  	 				</h2>
			  	 				<div className="p-2 row">
			  	 					<div className="p-3 pt-1 pb-4">
			  	 						IntelliSys:Machine Learning Symposium was a huge success with a colossal turnout of over 150 enthusiasts who were too eager to learn and explore.IEEE SB NIT Durgapur extends its heartfelt gratitude to our guest speakers, Dr. Fakhral Yusoff and Mr. Shivam Abhilash for leaving us all dazzled and especially to all the participants for their overwhelming response.
			  	 					</div>
			  	 					<div className="w-100 p-0">
			  	 						<nav className="p-1 d-flex">
			  	 							
			  	 								<p className="pl-0">Read more</p>
			  	 								<p className="ml-auto pr-2">October 19, 2019</p>
			  	 							
			  	 						</nav>
			  	 					</div>
			  	 				</div>
			  	 			</div>
			  	 		</div>
		  	 		</div>
		  	 		<div className=" col-12 col-sm-12 col-md-6 col-lg-6 p-2 align-self-stretch">
			  	 		<div className="row ml-0 mr-0 border bdr-25 actiWrappers h-100">
			  	 			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 pl-0 p-0">
			  	 				<div className="d-flex p-1">
			  	 					<div className="cover-img p-0 col-9 col-xs-9 col-sm-9 col-md-9 col-lg-9">
			  	 						<img className="img-100" src={this.state.sdvcover} />
			  	 					</div>
			  	 					<div className="row ml-0 mr-0 p-0 mr-0 ml-0 col-3 col-xs-3 col-sm-3 col-md-3 col-lg-3">
			  	 						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 p-0">
			  	 							<img className="img-100 img-click" src={sdv1} onClick={() => this.imageClick(1, "sdv")}/>
			  	 						</div>
			  	 						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 p-0">
			  	 							<img className="img-100 img-click" src={sdv2} onClick={() => this.imageClick(2, "sdv")} />
			  	 						</div>
			  	 						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 p-0">
			  	 							<img className="img-100 img-click" src={sdv3} onClick={() => this.imageClick(3, "sdv")} />
			  	 						</div>
			  	 					</div>
			  	 				</div>
			  	 			</div>
			  	 			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			  	 				<h2 className="special-sub-headers text-dark">
			  	 					SDV 2.0
			  	 				</h2>
			  	 				<div className="p-2 row">
			  	 					<div className="p-3 pt-1 pb-4">
			  	 						In this era of advancement and competing efficiency where society expects autonomous vehicles to be held to a higher standard than human drivers,we in collaboration with the Society of Automotive Engineers organized a two-day workshop to introduce students to the world of autonomous driving.	
			  	 					</div>
			  	 					<div className="w-100 p-0">
			  	 						<nav className="p-1 d-flex">
			  	 							
			  	 								<p className="pl-0">Read more</p>
			  	 								<p className="ml-auto pr-2">August 31, 2019</p>
			  	 							
			  	 						</nav>
			  	 					</div>
			  	 				</div>
			  	 			</div>
			  	 		</div>
		  	 		</div>
	  	 		</div>
	  	 	</div>
	  	 )


	}
}

