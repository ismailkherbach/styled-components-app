import React, { Component } from "react";
import EmployeesTable from "../../../componenets/EmployeesTable";

export default class Employee extends Component {
  render() {
    return (
      <div className="employees flex fdc aic jcfs">
        <EmployeesTable />
      </div>
    );
  }
}
