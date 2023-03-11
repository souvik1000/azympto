import React from "react";
import styled from "styled-components";

import StarOutlineIcon from "@mui/icons-material/StarOutline";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";

const Wrapper = styled.div`
  margin: 144px 48px 260px 48px;

  .about-header {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    text-align: center;
    color: #1a202c;
    margin-bottom: 48px;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 304px;

  .details-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    background: #f6f7fb;
    border-radius: 50%;
    margin: 16px 0px;
  }

  .details-title {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 40px;
    text-align: center;
    color: #1a202c;
  }

  .details-description {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    text-align: center;
    color: #1a202c;
  }
`;

const About = () => {
  return (
    <Wrapper>
      <div className="about-header">Why People Choose Us</div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Details>
          <div className="details-logo">
            <ViewInArOutlinedIcon style={{ width: "28px", height: "26px" }} />
          </div>
          <div className="details-title">Easy Returns</div>
          <div className="details-description">
            Our return policy is simple and that is why customers love our shop.
          </div>
        </Details>
        <Details>
          <div className="details-logo">
            <PersonOutlinedIcon style={{ width: "28px", height: "26px" }} />
          </div>
          <div className="details-title">Customer Service</div>
          <div className="details-description">
            We offer amazing customer service no matter what happens.
          </div>
        </Details>
        <Details>
          <div className="details-logo">
            <StarOutlineIcon style={{ width: "28px", height: "26px" }} />
          </div>
          <div className="details-title">High Quality</div>
          <div className="details-description">
            All of our products go through very strict inspection before we
            dispatch them.
          </div>
        </Details>
      </div>
    </Wrapper>
  );
};

export default About;
