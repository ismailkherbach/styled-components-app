import React, { Component } from "react";
import { connect } from "react-redux";
import { InfoCard } from "./InfoCard";
import styled from "styled-components";
export class EmployeesTable extends Component {
  render() {
    return (
      <CardContainer>
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </CardContainer>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesTable);

const CardContainer = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin: auto;
  cursor: pointer;
  position: relative;
`;
