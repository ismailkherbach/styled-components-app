import React, { Component } from "react";
import { connect } from "react-redux";
import article1 from "../assets/img/article1.png";
import forbesLogo from "../assets/img/forbes.png";
import share1 from "../assets/img/share1.svg";
import share2 from "../assets/img/share2.svg";
import styled from "styled-components";
export class InfoCard extends Component {
  render() {
    return (
      <CardBody>
        <PictureWrapper>
          <Picture alt="article1" src={article1} />
          <PostBotton>Post Now</PostBotton>
          <ShareWrapper>
            <ShareBotton>
              <SharePicture alt="share1" src={share1} />
            </ShareBotton>
            <ShareBotton>
              <SharePicture alt="share2" src={share2} />
            </ShareBotton>
          </ShareWrapper>
        </PictureWrapper>
        <ChannelWrapper>
          <Avatar alt="forbes" src={forbesLogo} />

          <ChannelName>Forbes</ChannelName>
        </ChannelWrapper>
        <Title>
          6 ways to achieve ‘wow’ customer service and create lifelong customers
        </Title>
        <Details>
          7h ago · All humans, including the humans we call "customers," tend to
          remember what happens
        </Details>
      </CardBody>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(InfoCard);

const CardBody = styled.div`
  width: 31%;
  height: 406px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: auto;
  cursor: pointer;
  postion: relative;
  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const PictureWrapper = styled.div`
  height: 228px;
  width: 100%;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #333333;

  &:hover {
    background-color: #333333;
    z-index: 5;
  }
`;

const Picture = styled.img`
  height: 228px;
  width: 100%;
  border-radius: 12px;
  object-fit: cover;
  &:hover {
    opacity: 0.6;
  }
`;

const PostBotton = styled.button`
  width: 146px;
  height: 56px;
  border-radius: 28px;
  background-color: white;
  outline: none;
  border: none;
  position: absolute;
`;

const ShareBotton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  outline: none;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px;
  background-color: transparent;
  &:hover {
    backdrop-filter: blur(9px);
    background-color: #333333;

    ${Picture} {
      opacity: 0.6;
    }
  }
`;

const SharePicture = styled.img`
  width: 20px;
  height: 20px;
  &:hover ${Picture} {
    opacity: 0.6;
  }
`;

const ShareWrapper = styled.div`
  &:hover ${Picture} {
    opacity: 0.6;
  }
  width: 70%;
  height: 40px;
  position: absolute;
  top: 5px;
  right: 0px;
  display: flex;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ChannelWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  postion: relative;
`;

const ChannelName = styled.h5`
  color: #333333c7;
  font-size: 14px;
  font-weight: 600;
  padding-left: 8px;
`;

const Avatar = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  object-fit: cover;
`;

const Title = styled.h1`
  color: #333333;
  font-size: 18px;
  font-weight: 600;
`;

const Details = styled.h5`
  color: #333333c7;
  font-size: 14px;
  font-weight: 400;
  padding-top: 8px;
`;
