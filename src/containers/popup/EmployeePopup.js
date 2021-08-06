import React, { Component, Fragment } from "react";
import departmentIcon from "../../assets/img/department.svg";
import countrytIcon from "../../assets/img/country.svg";
import locationIcon from "../../assets/img/location.svg";
import contractIcon from "../../assets/img/contract.svg";
import ScheduleMeetingPopup from "./ScheduleMeetingPopup";
import backIcon from "../../assets/img/back.svg";

export default class EmployeePopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scheduleMeetingPopup: false,
    };
  }
  render() {
    const { scheduleMeetingPopup } = this.state;
    const { employee } = this.props;
    return (
      <Fragment>
        {scheduleMeetingPopup && (
          <ScheduleMeetingPopup
            availability={this.props.employee.availability}
            closeSchedulePopup={() =>
              this.setState({ scheduleMeetingPopup: false })
            }
          />
        )}
        <div className="employee flex fdr aic jcc">
          <div
            onClick={this.props.closeEmployeePopup}
            className="goback flex fdr aic jcc"
          >
            <img
              alt="close"
              src={backIcon}
              onClick={this.props.closeEmployee}
            />
          </div>
          <div className="employee-picture flex fdc aic jcc">
            <div className="picture flex fdr aic jcc">
              <img alt="avatar" src={employee.picture} />
            </div>
            <h5>{employee.name}</h5>
            <h5>Age : {employee.age} </h5>
            <div
              onClick={() => this.setState({ scheduleMeetingPopup: true })}
              className="schedule-meeting flex fdr aic jcc"
            >
              Schedule a Meeting
            </div>
            <div className="send-survey flex fdr aic jcc">Send Survey</div>
          </div>
          <div className="employee-infos flex fdc aic  jcc">
            <div className="info-container flex fdr aic jcfs">
              <div className="info-icon flex fdr aic jcc">
                <img alt="icon" src={departmentIcon} />
              </div>
              <h5>{employee.position}</h5>
            </div>

            <div className="info-container flex fdr aic jcfs">
              <div className="info-icon flex fdr aic jcc">
                <img alt="icon" src={departmentIcon} />
              </div>
              <h5>{employee.department}</h5>
            </div>

            <div className="info-container flex fdr aic jcfs">
              <div className="info-icon flex fdr aic jcc">
                <img alt="icon" src={locationIcon} />
              </div>
              <h5>{employee.location}</h5>
            </div>

            <div className="info-container flex fdr aic jcfs">
              <div className="info-icon flex fdr aic jcc">
                <img alt="icon" src={countrytIcon} />
              </div>
              <h5>{employee.country}</h5>
            </div>

            <div className="info-container flex fdr aic jcfs">
              <div className="info-icon flex fdr aic jcc">
                <img alt="icon" src={contractIcon} />
              </div>
              <h5>{employee.contract}</h5>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
