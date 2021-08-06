import React, { Component } from "react";
import { DropdownMultiple } from "reactjs-dropdown-component";
import {
  city,
  position,
  contract,
  country,
  department,
} from "../../constants/cities";
import closeIcon from "../../assets/img/cancel.svg";
export default class FilterPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onChangeCity = (item, name) => {
    this.setState({ city: item });
  };

  onChangeContract = (item, name) => {
    this.setState({ contract: item });
  };

  onChangeCountry = (item, name) => {
    this.setState({ country: item });
  };

  onChangeDepartment = (item, name) => {
    this.setState({ department: item });
  };

  onChangePosition = (item, name) => {
    this.setState({ position: item });
  };
  render() {
    return (
      <div className="popup-container flex fdc aic jcc">
        <div className="filter-dropdown flex fdc aic jcc">
          <div className="close flex fdr aic jcc">
            <img alt="close" src={closeIcon} onClick={this.props.closeFilter} />
          </div>
          <h4>Filter Employees By :</h4>
          <DropdownMultiple
            name="Position"
            title="Position"
            titleSingular="position"
            list={position.map((e) => {
              return { label: e, value: e };
            })}
            onChange={this.onChangePosition.bind(this)}
          />
          <DropdownMultiple
            name="Department"
            title="Department"
            titleSingular="department"
            list={department.map((e) => {
              return { label: e, value: e };
            })}
            onChange={this.onChangeDepartment.bind(this)}
          />
          <DropdownMultiple
            name="Location"
            title="Location"
            titleSingular="location"
            list={city}
            onChange={this.onChangeCity.bind(this)}
          />
          <DropdownMultiple
            name="Country"
            title="Country"
            titleSingular="country"
            list={country.map((e) => {
              return { label: e, value: e };
            })}
            onChange={this.onChangeCountry.bind(this)}
          />
          <DropdownMultiple
            name="Conract"
            title="Conract"
            titleSingular="conract"
            list={contract.map((e) => {
              return { label: e, value: e };
            })}
            onChange={this.onChangeContract.bind(this)}
          />
          <div
            onClick={this.props.closeFilter}
            className="filterBtn flex fdr aic jcc"
          >
            <h5>Apply</h5>
          </div>
        </div>
      </div>
    );
  }
}
