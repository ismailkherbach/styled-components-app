import React, { Component } from "react";
import closeIcon from "../../assets/img/cancel.svg";
import { Dropdown } from "reactjs-dropdown-component";
import { category, answerType } from "../../constants/cities";
export default class CreateSurveyPopup extends Component {
  onChangeCategory = (item, name) => {
    this.setState({ category: item });
  };

  onChangeAnswerType = (item, name) => {
    this.setState({ answerType: item });
  };
  render() {
    return (
      <div className="popup-container flex fdc aic jcc">
        <div className="create-survey-popup flex fdc aic jcc">
          <div className="close flex fdr aic jcc">
            <img
              alt="close"
              src={closeIcon}
              onClick={this.props.closeCreateSurvey}
            />
          </div>
          <div className="wb-90 flex fdc aifs jcc">
            <h5>Title</h5>
            <input placeholder="Enter your survey title" />
          </div>
          <div className="wb-90 flex fdc aifs jcc">
            <h5>Category</h5>
            <Dropdown
              name="Category"
              title="Category"
              list={category.map((e) => {
                return { label: e, value: e };
              })}
              onChange={this.onChangeCategory.bind(this)}
            />
          </div>
          <div className="wb-90 flex fdc aifs jcc">
            <h5>Question</h5>
            <input placeholder="Enter your Question" />
          </div>
          <div className="wb-90 flex fdc aifs jcc">
            <h5>Answer Type</h5>
            <Dropdown
              name="Answer Type"
              title="Answer Type"
              list={answerType.map((e) => {
                return { label: e, value: e };
              })}
              onChange={this.onChangeAnswerType.bind(this)}
            />
          </div>
          <div className="create-survey add-question flex fdr aic jcc">
            <h5>Add another question</h5>
          </div>
          <div
            onClick={this.props.closeCreateSurvey}
            className="create-survey flex fdr aic jcc"
          >
            <h5>Create survey</h5>
          </div>
        </div>
      </div>
    );
  }
}
