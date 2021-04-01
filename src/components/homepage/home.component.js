import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Redirect } from "react-router-dom";
import { Switch, Route } from 'react-router-dom';
import Landing from "../landing-component/landing.component"
import Header from "../header/header.component"
import InfoG from "../infographics-component/info.component"
import AboutUs from "../about-us/about-us.component"
import Events from "../events-component/events.component"
import InfoIEEE from "../info-ieee/info-ieee.component"
import React from "react";
import PostDataService from "../../services/post.service"
import Fade from 'react-reveal/Fade';
import ActivitiesHome from "../home-activities/home-activities.component.js"
import Stats from "../stats-component/stats.component.js"
import Insight from "../insight-component/insight.component.js"
import Team from "../team-component/team.component.js"
import Testinomials from "../testinomial-component/testinomial.component.js"
import Collab from "../collab-component/collab.component.js"
import Contact from "../contact-component/contact.component.js"
import Loader from '../loader/loader'


function Home (){

      return (
		  
        <div>
          <Landing/>
	      <InfoG/>
	      <AboutUs/>
	      <Stats/>
	      <InfoIEEE/>
	      <ActivitiesHome/>
	      <Insight/>
	      <Team/>
	      <Testinomials/>
	      <Collab/>
	      <Contact/>
        </div>
	  )
	}


export default Home;
