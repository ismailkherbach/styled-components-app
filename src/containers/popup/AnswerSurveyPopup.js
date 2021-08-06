import React, { Component } from "react";
import closeIcon from "../../assets/img/cancel.svg";
import { Dropdown } from "reactjs-dropdown-component";
import { city } from "../../constants/cities";
export default class AnswerSurveyPopup extends Component {
  onChangeCity = (item, name) => {
    this.setState({ city: item });
  };
  render() {
    return (
      <div className="popup-container flex fdc aic jcc">
        <div className="create-survey-popup flex fdc aic jcc">
          <div className="close flex fdr aic jcc">
            <img
              alt="close"
              src={closeIcon}
              onClick={this.props.closeAnswerSurvey}
            />
          </div>
          <div className="wb-90 flex fdc aifs jcc">
            <h5>Wha is your name ?</h5>
            <input placeholder="Enter your answer" />
          </div>
          <div className="wb-90 flex fdc aifs jcc">
            <h5>What is your position ?</h5>
            <Dropdown
              name="Position"
              title="Position"
              list={city}
              onChange={this.onChangeCity.bind(this)}
            />
          </div>

          <div
            onClick={this.props.closeAnswerSurvey}
            className="create-survey flex fdr aic jcc"
          >
            <h5>Send answer</h5>
          </div>
        </div>
      </div>
    );
  }
}
