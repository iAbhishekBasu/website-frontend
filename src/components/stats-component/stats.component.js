import React, { Component } from "react";
import { Link, Redirect, Switch, Route } from "react-router-dom";
import "../common.css";
import "./stats.css";

export default class Stats extends Component {
   constructor(props) {
      super(props);

      this.state = {};
   }

   componentDidMount() {}

   render() {
      return (
         <div className="main-container p-3 stats">
            <div className="row ml-0 mr-0">
               <div className="col col-lg-4 col-md-4 col-sm-12  col-12 stats-content">
                  <p className="stats-number">50+ </p>
                  <p className="stats-text">Branch Members</p>
               </div>
               <div className="col col-lg-4 col-md-4 col-sm-12  col-12 stats-content">
                  <p className="stats-number">30+</p>
                  <p className="stats-text">Events & Workshops</p>
               </div>
               <div className="col col-lg-4 col-md-4 col-sm-12  col-12 stats-content">
                  <p className="stats-number">500+</p>
                  <p className="stats-text">Participants</p>
               </div>
            </div>
         </div>
      );
   }
}
