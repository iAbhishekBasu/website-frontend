import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import Fade from "react-reveal/Fade";
import { Link, Redirect } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

import PostDataService from "../../services/post.service";
import AboutUs from "../about-us/about-us.component";
import Collab from "../collab-component/collab.component.js";
import Contact from "../contact-component/contact.component.js";
import Events from "../events-component/events.component";
import Header from "../header/header.component";
import ActivitiesHome from "../home-activities/home-activities.component.js";
import InfoIEEE from "../info-ieee/info-ieee.component";
import InfoG from "../infographics-component/info.component";
import Insight from "../insight-component/insight.component.js";
import Landing from "../landing-component/landing.component";
import Loader from "../loader/loader";
import Stats from "../stats-component/stats.component.js";
import Team from "../team-component/team.component.js";
import Testinomials from "../testinomial-component/testinomial.component.js";

function Home() {
  return (
    <div>
      <Landing />
      <InfoG />
      <AboutUs />
      <Stats />
      <InfoIEEE />
      <ActivitiesHome />
      <Insight />
      <Team />
      <Testinomials />
      <Collab />
      <Contact />
    </div>
  );
}

export default Home;
