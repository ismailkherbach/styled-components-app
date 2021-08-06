import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Navbar from "../containers/navbars/navbar";
import Sidebar from "../containers/navbars/sidebar";

class AppLayout extends Component {
  render() {
    return (
      <div id="app-container" className="flex fdc">
        <Navbar />
        <Sidebar />
        <main className={this.props.settings.sidebarClassName}>
          <div className="container flex">{this.props.children}</div>
        </main>
      </div>
    );
  }
}
const mapStateToProps = ({ settings }) => {
  return { settings };
};

export default withRouter(connect(mapStateToProps)(AppLayout));
