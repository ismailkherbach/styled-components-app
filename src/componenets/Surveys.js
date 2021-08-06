import React, { Component, Fragment } from "react";
import CreateSurveyPopup from "../containers/popup/CreateSurevyPopup";

export default class Surveys extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createSurveyPopup: false,
    };
  }
  render() {
    const { createSurveyPopup } = this.state;
    return (
      <Fragment>
        {createSurveyPopup && (
          <CreateSurveyPopup
            closeCreateSurvey={() => {
              this.setState({ createSurveyPopup: false });
            }}
          />
        )}
        <div className="wb-100 flex fdc aic jcc">
          <div className="top-bloc flex fdr aic jcc">
            <div className="left flex fdr aic jcfs">
              <h4>Surveys</h4>
            </div>
            <div className="right flex fdr aic jcfe">
              <div
                onClick={() => {
                  this.setState({ createSurveyPopup: true });
                }}
                className="create-survey flex fdr aic jcc"
              >
                <h5>Create survey</h5>
              </div>
            </div>
          </div>
          <div className="survey-card flex fdr aic jcc">
            <div className="left flex fdc aifs jcc">
              <h4> Created by : Ismail kherbach</h4>
              <h5>Category : Tech</h5>
            </div>
            <div className="right flex fdc aifs jcc">
              <div className="pending flex fdr aic jcc">Pending</div>
              <p>12/07/2021, 12:56 AM</p>
            </div>
          </div>

          <div className="survey-card flex fdr aic jcc">
            <div className="left flex fdc aifs jcc">
              <h4> Created by : Ismail kherbach</h4>
              <h5>Category : Tech</h5>
            </div>
            <div className="right flex fdc aifs jcc">
              <div className="completed flex fdr aic jcc">Completed</div>
              <p>12/07/2021, 12:56 AM</p>
            </div>
          </div>
          <div className="survey-card flex fdr aic jcc">
            <div className="left flex fdc aifs jcc">
              <h4> Created by : Ismail kherbach</h4>
              <h5>Category : Tech</h5>
            </div>
            <div className="right flex fdc aifs jcc">
              <div className="completed flex fdr aic jcc">Completed</div>
              <p>12/07/2021, 12:56 AM</p>
            </div>
          </div>
          <div className="survey-card flex fdr aic jcc">
            <div className="left flex fdc aifs jcc">
              <h4> Created by : Ismail kherbach</h4>
              <h5>Category : Tech</h5>
            </div>
            <div className="right flex fdc aifs jcc">
              <div className="completed flex fdr aic jcc">Completed</div>
              <p>12/07/2021, 12:56 AM</p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
