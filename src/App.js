import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Redirect } from "react-router-dom";
import { Switch, Route } from 'react-router-dom';
import Home from "./components/homepage/home.component"
import Header from "./components/header/header.component"
import InfoG from "./components/infographics-component/info.component"
import AboutUs from "./components/about-us/about-us.component"
import Events from "./components/events-component/events.component"
import EventDetails from "./components/events-component/event.details.component"
import Member from "./components/members-component/members.component.js"
import Footer from "./components/footer/footer.component.js"
import Alumni from "./components/alumni-component/alumni.component.js"


function App() {
  return (
  	<div>
	    <div className="">
	      
	      <Header/>
	        
	    </div>
	    <div className="">
	          <Switch>
	          	<Route exact path={["/"]} component={Home} />
	            <Route exact path={["/events"]} component={Events} />
	            <Route exact path={["/events/:id"]} component={EventDetails} />
	            <Route exact path={["/members"]} component={Member} />
	            <Route exact path={["/alumni"]} component={Alumni} />
	          </Switch>
	    </div>
	    <Footer/>
    </div>
  );
}

export default App;
