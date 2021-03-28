import React, { Component } from "react";
import PostDataService from "../../services/post.service"
import Fade from 'react-reveal/Fade'
import "./events.css"
import { Link, Redirect, Switch, Route } from "react-router-dom";


class EventDetails extends Component {
constructor(props) {
    super(props);
    this.getEvent = this.getEvent.bind(this);

    this.state = {
      currentEvent: {
        id: null,
        title: "",
        slug: "google-cloud-study-jams",
        updated_on: "2021-02-25T20:47:27.447444Z",
        content: "",
        image: "",
        image_1: "",
        image_2: "",
        image_3: "",
        created_on: "",
        status: 0,
        event_date: ""
      },
      message: "",
      retrieved: false
    };
  }

  componentDidMount() {

    this.getEvent(this.props.match.params.id);

  }



	  getEvent(id){
	  	PostDataService.get(id)
	  	.then(response => {
	  		this.setState({
	          currentEvent: response.data,
	          retrieved: true
	        });
	  		console.log(response.data);
	  	})
	  	.catch(e => {
	  		console.log(e);
	  	});
	  }
	  refreshList() {
	    this.getEvent(this.props.match.params.id);
	    this.setState({
	    	retrieved: true
	    });
	  }

  
  render() {
      return (
        <div className="text-center main-container">
        	<div className="jumbotron banner border-0 rounded-0">
        		<h1 className="display-3 text-light"> Events </h1>
        	</div>
        	
			  <div className="row">
			  	{this.state.retrieved ? "" : (
			  		<div className="display-3 p-3">
			  			Loading...
			  		</div>
			  		)}
			  	
			  		<div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 card">
			  			<div className="image-wrapper">
			  				<img className="card-img-top" src={this.state.currentEvent.image} />
			  			</div>
					    <div className="card-body">
					      <h1 className="text-center heading lead">{this.state.currentEvent.title}</h1>
					      <p className="card-text"> {this.state.currentEvent.content} </p>
					    </div>
					    <div className="row grid-img-wrapper">
					    	<div className="col-xs-6 col-sm-4 col-md-4 col-lg-4 grid-img">
					    		<img src={this.state.currentEvent.image_1} />
					    	</div>
					    	<div className="col-xs-6 col-sm-4 col-md-4 col-lg-4 grid-img">
					    		<img src={this.state.currentEvent.image_2} />
					    	</div>
					    	<div className="col-xs-6 col-sm-4 col-md-4 col-lg-4 grid-img">
					    		<img src={this.state.currentEvent.image_3} />
					    	</div>

					    </div>
			  		</div>

			  </div>
			
        </div>
          
      )
  }
}

export default EventDetails;
