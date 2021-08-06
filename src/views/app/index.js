import React, { Suspense } from "react";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";

import AppLayout from "../../layout/AppLayout";
const Employee = React.lazy(() => import("./Employee/employee"));

const Survey = React.lazy(() => import("./Survey/survey"));

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { match } = this.props;

    return (
      <div className={`main-bloc`}>
        <Suspense fallback={<div className="loading" />}>
          <AppLayout>
            <Switch>
              <Route
                path={`${match.url}/employee`}
                render={(props) => <Employee {...props} />}
              />

              <Route
                path={`${match.url}/survey`}
                render={(props) => <Survey {...props} />}
              />
              <Redirect to="/app/employee" />
            </Switch>
          </AppLayout>
        </Suspense>
      </div>
    );
  }
}

export default withRouter(App);
