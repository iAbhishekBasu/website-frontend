import React, { Component } from "react";
import "../common.css";
import "./members.css";
import Batch2019 from "../../data/batch2019";
import Batch2020 from "../../data/batch2020";

export default class Memebrs extends Component {
   constructor(props) {
      super(props);
      this.activate = this.activate.bind(this);
      this.toggleDockClass = this.toggleDockClass.bind(this);
      this.state = {
         activedata: Batch2019,
         isactive2019: true,
         isactive2020: false,
         imageHash: Date.now(),
         dockstatus: false,
         togglestring: ">",
      };
   }

   componentDidMount() {}
   activate(year) {
      this.setState({
         isactive2019: false,
         isactive2020: false,
      });
      if (year == 2019) {
         this.setState({
            activedata: Batch2019,
            isactive2019: true,
         });
      } else if (year == 2020) {
         this.setState({
            activedata: Batch2020,
            isactive2020: true,
         });
      
      }
   }

   toggleDockClass() {
      this.setState((state) => ({
         dockstatus: !state.dockstatus,
      }));
      if (this.state.dockstatus) {
         this.setState({
            togglestring: ">",
         });
      } else {
         this.setState({
            togglestring: "<",
         });
      }
   }

   render() {
      return (
         <div className="text-center main-container">
            <div className="jumbotron banner border-0 rounded-0">
               <h1 className="display-3 text-light"> Alumni</h1>
            </div>
            <div className="container mt-4">
               <div className="facad">
                  <div className="facad-card-group">
                     
                  </div>
                  <div className="facad-card-group row ml-0 mr-0">
                  </div>
               </div>
            </div>
            <div className="container mt-4">
               <div className="button-wrapper d-flex justify-content-around">
                  <button
                     className={`btn pl-3 pr-3 btn-primary ${
                        this.state.isactive2019 ? "active btn-secondary" : ""
                     }`}
                     onClick={() => this.activate(2019)}
                  >
                     {" "}
                     Batch of 2019{" "}
                  </button>
                  <button
                     className={`btn pl-3 pr-3 btn-primary ${
                        this.state.isactive2020 ? "active btn-secondary" : ""
                     }`}
                     onClick={() => this.activate(2020)}
                  >
                     {" "}
                     Batch of 2020{" "}
                  </button>
               </div>
               <div className="row m-1 ">
                  {this.state.activedata &&
                     this.state.activedata.map((member, index) => (
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                           <div className="card">
                              <div className="image-wrapper">
                                 <img
                                    className="card-img-top"
                                    key={Date.now()}
                                    src={`${member.img.default}`}
                                    alt="Profile_pic"
                                 />
                              </div>

                              <div className="card-body text-center">
                                 <h4 className="card-title title heading2">
                                    {" "}
                                    {member.name}{" "}
                                 </h4>
                                 <p className="lead text-muted small">
                                    {" "}
                                    {member.post}
                                 </p>
                              </div>
                           </div>
                        </div>
                     ))}
               </div>
            </div>
         </div>
      );
   }
}
