import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setSideBarClass } from "../../redux/actions";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: "Employee",
      link: null,
    };
  }

  handleClick(x) {
    this.setState({
      x: x,
    });
  }
  componentDidMount() {
    if (this.props.history.location.pathname === "/app/employee") {
      this.handleClick("Employee");
    }
  }
  render() {
    return (
      <div
        className={
          "sidebar flex fdc aic jcfs " + this.props.settings.sidebarClassName
        }
      >
        <ul className="flex fdc aic jcc">
          <Link to="/app/employee">
            <li
              onClick={this.handleClick.bind(this, "Employee")}
              className={`flex fdr aic jcfs ${
                this.state.x === "Employee" ? "clicked" : ""
              }`}
            >
              <h5>Topics</h5>
            </li>
          </Link>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ settings }) => {
  return { settings };
};
export default withRouter(
  connect(mapStateToProps, { setSideBarClass })(Sidebar)
);
