import React, { Component } from "react";
import PostDataService from "../../services/post.service"
import Fade from 'react-reveal/Fade'
import "./events.css"
import { Link, Redirect, Switch, Route } from "react-router-dom";


class Events extends Component {
		constructor(props) {
	    super(props);
	    this.retrievePosts = this.retrievePosts.bind(this);
	    this.refreshList = this.refreshList.bind(this);
	    this.getEvent = this.getEvent.bind(this);

	    this.state = {
	      posts: [],
	      retrieved: false
	    };
	  }

	  componentDidMount() {
	    this.retrievePosts();
	    
	  }
	  retrievePosts() {
	    PostDataService.getAll()
	      .then(response => {
	        this.setState({
	          posts: response.data,
	          retrieved: true
	        });
	        console.log(response.data);
	      })
	      .catch(e => {
	        console.log(e);
	      });
	  }

	  refreshList() {
	    this.retrievePosts();
	    this.setState({
	    	retrieved: true
	    });
	  }
	  getEvent(id){
	  	PostDataService.get(id)
	  	.then(response => {
	  		console.log(response.data);
	  	})
	  	.catch(e => {
	  		console.log(e);
	  	});
	  }

  
  render() {
      return (
        <div className="main-container">
        	<div className="text-center jumbotron banner border-0 rounded-0">
        		<h1 className="display-3 text-light"> Events </h1>
        	</div>
        	
			  <div className="row ml-0 mr-0">
			  	{this.state.retrieved ? "" : (
			  		<div className="text-center display-3 p-3">
			  			Loading...
			  		</div>
			  		)}
			  	{ this.state.posts &&  this.state.posts.map((post, index) => (
			  		<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
			  			<div className="card">
				  			<div className="image-wrapper">
				  				<img className="card-img-top" src={post.image} />
				  			</div>
						    <div className="card-body text-center" >
						      <h5 className="card-title">{post.title}</h5>
						      <p className="card-text"> {post.content.substring(0, 200)}... </p>
						    </div>
				              <Link to={`/events/${post.id}`} className="btn btn-primary">
				                details
				              </Link>
			  			</div>
			  		</div>

			  		))}
			  </div>
			
        </div>
          
      )
  }
}

export default Events;
