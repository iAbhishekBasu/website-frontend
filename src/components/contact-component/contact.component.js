import React, { Component } from "react";
import { Link, Redirect, Switch, Route } from "react-router-dom";
import "../common.css"
import "./contact.css"
import FeedbackDataService from "../../services/feedback.service.js"

import phone from "../../media/icons/phone.svg"
import mail from "../../media/icons/mail.svg"
import location from "../../media/icons/location.svg"



export default class Contact extends Component {
	  constructor(props) {
	    super(props);
	    this.onChangeName = this.onChangeName.bind(this)
	    this.onChangeMail = this.onChangeMail.bind(this)
	    this.onChangeMessage = this.onChangeMessage.bind(this)
	    this.saveFeedback = this.saveFeedback.bind(this)
	    
	    this.state = {
	    	name: "",
	    	mail: "",
	    	message: "",
	    	feedbacksubmitted: false
	    	
	    };
	  }

	  componentDidMount() {
	     
	  }
	  onChangeName(e){
	  	this.setState({
	  		name: e.target.value
	  	})
	  }
	  onChangeMail(e){
	  	this.setState({
	  		mail: e.target.value
	  	})
	  }
	  onChangeMessage(e){
	  	this.setState({
	  		message: e.target.value
	  	})
	  }
	  saveFeedback(){
	  	const feedback = {
	  		name: this.state.name,
	  		email: this.state.mail,
	  		message: this.state.message
	  	}
	  	
	  	FeedbackDataService.create(feedback)
	  	.then(res => {
	  		
	  		this.setState({
	  			feedbacksubmitted: true
	  		})
	  	})
	  	.catch(err => {
	  		console.log(err)
	  	})
	  }
	  


	  render() {

	  	 return(
	  	 	<div className="main-container" id="contact-us">
	  	 		<h2 className="special-headers"> Contact Us </h2> 

	  	 		<div className="row contact-content ml-0 mr-0">
	  	 		  
	  	 		  <div className="col-lg-7 col-md-7 col-sm-12 col-12 contact-form-container">
	  	 		  		
	  	 		  		<div className="form-text-heading">
	  	 		  			<h3 className="display contact-sub-heading">Leave a Message</h3>
	  	 		  	
	  	 		  			<p className="text-muted"> Your message means a lot!
	  	 		  			<br></br> 
	  	 		  			{this.state.feedbacksubmitted ? "Thanks for your feedback!" : "" }
	  	 		  			</p>
	  	 		  		</div>
	  	 		  	
	  	 		  		<div className="form-cover">
	  	 		  			<div className="form-group">
		  	 		  			<input
	                              type="text"
	                              className="form-control"
	                              id="name"
	                              required
	                              value={this.state.name}
	                              onChange={this.onChangeName}
	                              name="name"
	                              placeholder = "Name"
	                            />
		  	 		  		</div>
		  	 		  		<div className="form-group">
		  	 		  			<input
	                              type="mail"
	                              className="form-control"
	                              id="mail"
	                              required
	                              value={this.state.mail}
	                              onChange={this.onChangeMail}
	                              name="mail"
	                              placeholder = "Email"
	                            />
	                            
		  	 		  		</div>
	  	 		  		</div>
	  	 		  		<div className="form-group">
	  	 		  			<textarea
                              type="text"
                              className="form-control"
                              id="message"
                              required
                              value={this.state.message}
                              onChange={this.onChangeMessage}
                              name="message"
                              placeholder = "Message"
                            />
	  	 		  		</div>
	  	 		  		<button onClick={this.saveFeedback} className="btn btn-special contact-button">
                            Send Your Message
                        </button>
	  	 		  	
	  	 		  </div>
	  	 		  <div className="col-lg-5 col-md-5 col-sm-12 col-12 contact-text-container text-center">
	  	 		  	
	  	 		  	<ul>
  	 					<li className="d-flex align-items-center">
	  	 					<div className="icon-cover">
	  	 						<img src={location} className="icon-fluid" />
	  	 					</div>
	  	 					<div className="text-left">NIT Durgapur<br></br>
							Mahatma Gandhi Avenue, Durgapur,
							West Bengal,India</div>
  	 					</li>
  	 					<li className="d-flex align-items-center">
	  	 					<div className="icon-cover">
	  	 						<img src={mail} className="icon-fluid" />
	  	 					</div>
	  	 					<div>ieeesb.nitdgp@gmail.com</div>
  	 					</li>
  	 					<li className="d-flex align-items-center">
  	 						<div className="icon-cover">
  	 							<img src={phone} className="icon-fluid" />
  	 						</div>
	  	 					<div>+919476211060</div>
  	 					</li>
		  	 		</ul>
	  	 		  </div>
	  	 			
	  	 		</div>
	  	 		
	  	 	</div>
	  	 )


	}
}

