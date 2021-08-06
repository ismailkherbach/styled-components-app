import React, { Component, Fragment } from "react";
import meetingIcon from "../assets/img/meeting.svg";

export default class MeetingsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createSurveyPopup: false,
    };
  }
  render() {
    return (
      <Fragment>
        <div className="wb-100 flex fdc aic jcc">
          <div className="top-bloc flex fdr aic jcfs">
            <div className="left flex fdr aic jcfs">
              <h4>Meetings</h4>
            </div>
          </div>
          <div className="survey-card flex fdr aic jcfs">
            <div className="icon flex fdc aifs jcc">
              <img alt="icon" src={meetingIcon} />
            </div>
            <div className="left flex fdc aifs jcc">
              <h4> With : Ismail kherbach</h4>
              <h5>At : Zoom</h5>
            </div>
            <div className="right flex fdc aifs jcc">
              <div className="wb-100 flex fdr aic jcc">
                <div className="completed flex fdr aic jcc">Accept</div>
                <div className="pending flex fdr aic jcc">Decline</div>
              </div>
              <p>12 July 2021 at 12:56 AM</p>
            </div>
          </div>

          <div className="survey-card flex fdr aic jcfs">
            <div className="icon flex fdc aifs jcc">
              <img alt="icon" src={meetingIcon} />
            </div>
            <div className="left flex fdc aifs jcc">
              <h4> With : Ismail kherbach</h4>
              <h5>At : Zoom</h5>
            </div>
            <div className="right flex fdc aifs jcc">
              <div className="completed flex fdr aic jcc">Completed</div>
              <p>12 July 2021 at 12:56 AM</p>
            </div>
          </div>
          <div className="survey-card flex fdr aic jcfs">
            <div className="icon flex fdc aifs jcc">
              <img alt="icon" src={meetingIcon} />
            </div>
            <div className="left flex fdc aifs jcc">
              <h4> With : Ismail kherbach</h4>
              <h5>At : Google Meet</h5>
            </div>
            <div className="right flex fdc aifs jcc">
              <div className="pending flex fdr aic jcc">Pending</div>
              <p>12 July 2021 at 12:56 AM</p>
            </div>
          </div>
          <div className="survey-card flex fdr aic jcfs">
            <div className="icon flex fdc aifs jcc">
              <img alt="icon" src={meetingIcon} />
            </div>
            <div className="left flex fdc aifs jcc">
              <h4> With : Ismail kherbach</h4>
              <h5>At : Zoom</h5>
            </div>
            <div className="right flex fdc aifs jcc">
              <div className="completed flex fdr aic jcc">Completed</div>
              <p>12 July 2021 at 12:56 AM</p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
