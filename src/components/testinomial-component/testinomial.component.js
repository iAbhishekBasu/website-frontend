import React, { Component } from "react";
import { Link, Redirect, Switch, Route } from "react-router-dom";
import "../common.css"
import "./testinomial.css"
import SlideShow from "../landing-slider/landing.slider.component"
import aniq from "../../media/batch2019/aniq.jpg"
import arindam from "../../media/batch2019/arindam.jpg"



export default class Testinomials extends Component {
	  constructor(props) {
	    super(props);

	    this.state = {
	    	
	    	
	    };
	  }

	  componentDidMount() {
	     
	  }



	  render() {

	  	 return(
	  	 	<div className="main-container dark-bg testinomials-container">
	  	 		<h2 className="special-headers"> Testinomials </h2> 
	  	 		<div className="">
	  	 			 <SlideShow
			            autoPlay={true}
			            activeSlideDuration={108000}
			            interactionMode="swipe"
			            alignCaption="center"
			            alignIndicators="center"
			            indicatorsColor="#fff"
			            useRightLeftTriangles={false}
			            rightTriangleColor="#fff"
			            leftTriangleColor="#fff"
			            rightIcon={
			              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
			                <path d="M312,256l-199-199a15,15 0 01 0-19l29-29a15,15 0 01 19,0l236,235a16,16 0 01 0,24l-236,235a15,15 0 01-19,0l-29-29a15,15 0 01 0-19z" />
			              </svg>
			            }
			            leftIcon = {
			            	<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
						      <path d="M351,9a15,15 0 01 19,0l29,29a15,15 0 01 0,19l-199,199l199,199a15,15 0 01 0,19l-29,29a15,15 0 01-19,0l-236-235a16,16 0 01 0-24z" />
						    </svg>
			            }
			          >
			          	<div className="main-slide">
			          		<div className="card person p-3 ml-auto mr-auto">
			          			<div className="image-wrapper-person">
			          				<img className="person-pic" src={aniq} />
			          			</div>
			          			<div className="name-container">
				          			<h2 className="display"> Aniq Ur Rahman </h2>
				          			<p className="text-muted"> Alumni 2019 </p>
				          		</div>
				          		<div className="test-content-container text">
				          			"Managing the IEEE Student Branch along with a bunch of enthusiastic people was an experience which cannot be put into words, still I'll mention a few takeaways which I think has helped me develop as a person. It made me realise that "collaboration is the key" and following that we worked together with other societies and clubs on campus, to conduct events focused on research. I apply this finding in my professional life to work on research projects with collaborators across the globe. Working in IEEE SB reinforced my love for research which fuels my daily life."
				          		</div>
			          		</div>
			          	</div>

			          	<div className="main-slide">
			          		<div className="card person p-3 ml-auto mr-auto">
			          			<div className="image-wrapper-person">
			          				<img className="person-pic" src={arindam} />
			          			</div>
			          			<div className="name-container">
				          			<h2 className="display"> Arindam Dutta </h2>
				          			<p className="text-muted"> Alumni 2019 </p>
				          		</div>
				          		<div className="test-content-container text">
				          			"Being a part of the team that got things under way for IEEE SB NITD was indeed an enriching experience for me. We managed to form an outstanding team and organize some amazing events. These social interactions, formal and informal, invariably motivated me to get started with research. Today, I’m addicted to it."
				          		</div>
			          		</div>
			          	</div>
			          </SlideShow>
	  	 			
	  	 		</div>
	  	 		
	  	 	</div>
	  	 )


	}
}

