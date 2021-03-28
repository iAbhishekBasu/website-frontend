import React, { Component } from "react";
import { Link, Redirect, Switch, Route } from "react-router-dom";
import "../common.css"
import "./collab.css"




export default class Collab extends Component {
	  constructor(props) {
	    super(props);
	    
	    this.state = {
	    	collabList: [{
	    		name: "IEEE Kolkata Section",
	    		logo: require("../../media/collabs/ieee_kol_logo.png"),
	    		link: "https://ewh.ieee.org/r10/calcutta/"
	    	},
	    	{
	    		name: "IEEE Computer Society",
	    		logo: require("../../media/collabs/ieee-cs-logo.png"),
	    		link: "https://www.computer.org/"
	    	},
	    	{
	    		name: "IEEE SB Jadavpur University",
	    		logo: require("../../media/collabs/ieeesbju.png"),
	    		link: "https://ieee.jaduniv.org/"
	    	},
	    	{
	    		name: "Unity",
	    		logo: require("../../media/collabs/unity_logo.png"),
	    		link: "https://ieee.jaduniv.org/"
	    	},
	    	{
	    		name: "GDG Kolkata",
	    		logo: require("../../media/collabs/gdg_kolkata.png"),
	    		link: "https://gdgkolkata.org/"
	    	},
	    	{
	    		name: "Global Shapers",
	    		logo: require("../../media/collabs/global.png"),
	    		link: "https://www.globalshapers.org/"
	    	},
	    	{
	    		name: "Intel Software",
	    		logo: require("../../media/collabs/intel.png"),
	    		link: "https://software.intel.com/en-us/"
	    	},
	    	{
	    		name: "Cisco",
	    		logo: require("../../media/collabs/cisco.png"),
	    		link: "https://www.cisco.com/"
	    	},
	    	{
	    		name: "Tonscript",
	    		logo: require("../../media/collabs/townscript.png"),
	    		link: "https://www.townscript.com/"
	    	},
	    	]
	    	
	    	
	    };
	  }

	  componentDidMount() {
	     
	  }
	  


	  render() {

	  	 return(
	  	 	<div className="main-container collab-container">
		  	 	<h2 className="special-headers"> Our Collaborations </h2> 
		  	 	<div className="row ml-0 mr-0">
		  	 		<div className="col-lg-5 col-md-5 col-sm-12 col-12 content-container">
		  	 			<h4> We believe in <p> collaborations! </p></h4>
		  	 		</div>
		  	 		<div className="col-lg-7 col-md-7 col-sm-12 col-12 logos-container row ml-0 mr-0">
		  	 			{this.state.collabList && this.state.collabList.map((company,index) => (
				  	 		<div className="col-lg-4 col-md-4 col-sm-12 col-12 collab-logo-wrapper">
				  	 			<a className="logo-link" href={company.link} target="_blank">
				  	 				<img className="logo-fluid" src={company.logo.default} />
				  	 			</a>
				  	 		</div>

				  	 	))}
		  	 		</div>
		  	 	</div>
	  	 	</div>
	  	 )


	}
}

