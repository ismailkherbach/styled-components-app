import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import menuIcon from "../../assets/img/menu.svg";
import { connect } from "react-redux";
import { setSideBarClass } from "../../redux/actions";
import styled from "styled-components";
import wilowLogo from "../../assets/img/wilow-logo.png";
import avatar from "../../assets/img/avatar.png";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { active: "Schedule" };
  }

  menuClick = () => {
    if (this.props.settings.sidebarClassName === "") {
      this.props.setSideBarClass("main-hidden");
    } else {
      this.props.setSideBarClass("");
    }
  };
  handleNavClick = (e) => {
    this.setState({ active: e });
  };
  render() {
    return (
      <div className="navbar flex fdr aic jcfs fixed-top">
        {/*<img
          onClick={this.menuClick}
          className="menu"
          alt="menu"
          src={menuIcon}
        />*/}
        <div className="left flex fdc aic jcc">
          <div className="logo flex fdr aic jcc">
            <img alt="logo" src={wilowLogo} />
          </div>
        </div>
        <div className="middle flex fdr aic jcc">
          {this.state.active === "Schedule" ? (
            <NavTab active onClick={() => this.handleNavClick("Schedule")}>
              Schedule
            </NavTab>
          ) : (
            <NavTab onClick={() => this.handleNavClick("Schedule")}>
              Schedule
            </NavTab>
          )}

          {this.state.active === "Content" ? (
            <NavTab active onClick={() => this.handleNavClick("Content")}>
              Content
            </NavTab>
          ) : (
            <NavTab onClick={() => this.handleNavClick("Content")}>
              Content
            </NavTab>
          )}
        </div>
        <div className="right flex fdr aic jcc">
          <AddButton>+</AddButton>
          <AddButton>
            <Avatar alt="avatar" src={avatar} />
          </AddButton>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ settings }) => {
  return { settings };
};
export default withRouter(
  connect(mapStateToProps, { setSideBarClass })(Navbar)
);

const NavTab = styled.div`
  width: 102px;
  height: 42px;
  background-color: ${(props) => (props.active ? "#1111110f" : "white")};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  margin: 0 8px 0 8px;
  cursor: pointer;
  color: ${(props) => (props.active ? "#333333" : "#3333336E")};
`;

const AddButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: #00b376;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  color: white;
  outline: none;
  border: none;
  position: relative;
  margin: 0 4px 0 4px;
`;

const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: absolute;
  object-fit: cover;
`;
