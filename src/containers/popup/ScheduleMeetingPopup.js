import React, { Component } from "react";
import closeIcon from "../../assets/img/cancel.svg";

export default class ScheduleMeetingPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scheduleMeetingPopup: false,
      time: "",
      day: "",
    };
  }
  render() {
    const { time, day } = this.state;
    const { availability } = this.props;
    return (
      <div className="popup-container flex fdc aic jcc">
        <div className="schedule-meeting-popup flex fdc aic jcc">
          <div className="close flex fdr aic jcc">
            <img
              alt="close"
              src={closeIcon}
              onClick={this.props.closeSchedulePopup}
            />
          </div>
          <h4> Ismail kherbach is available on :</h4>
          <div className="wb-100 flex fdr aic jcc">
            {availability.days.map((e, i) => {
              return (
                <div
                  key={i}
                  className={`date ${
                    day === e ? "clicked" : ""
                  } flex fdr aic jcc`}
                  onClick={() => this.setState({ day: e })}
                >
                  {" "}
                  {e}
                </div>
              );
            })}
          </div>

          <div className="wb-100 flex fdr aic jcc">
            {availability.time.map((e, i) => {
              return (
                <div
                  key={i}
                  className={`date ${
                    time === e ? "clicked" : ""
                  } flex fdr aic jcc`}
                  onClick={() => this.setState({ time: e })}
                >
                  {e}
                </div>
              );
            })}
          </div>
          <div
            onClick={this.props.closeSchedulePopup}
            className="scheduleBtn flex fdr aic jcc"
          >
            <h5>Send invite</h5>
          </div>
        </div>
      </div>
    );
  }
}
