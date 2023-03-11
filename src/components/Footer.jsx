import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  margin: 144px 48px;
  grid-template-columns: 60% 30%;

  ul {
    list-style: none;
  }
`;

const LogoWithCopyrights = styled.div`
  p {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #1a202c;
    margin: 12px 0px;
  }

  li {
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f6f7fb;
    height: 48px;
    width: 48px;
    margin-top: 20px;
    margin-right: 16px;
    border-radius: 50%;
    cursor: pointer;
  }
`;

const Links = styled.div`
  font-family: Montserrat;
  color: #1a202c;
  text-align: left;

  .links-header {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  li {
    font-size: 16px;
    font-weight: 400;
    margin: 16px 0px;
    cursor: pointer;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <LogoWithCopyrights>
        <img src="assets/logo.svg" width="115px" height="32px" />
        <p>&#169; 2020 - All rights reserved</p>
        <ul>
          <li>
            <img
              src="assets/branding/instagram.svg"
              width="18px"
              height="18px"
            />
          </li>
          <li>
            <img src="assets/branding/twitter.svg" width="18px" height="18px" />
          </li>
          <li>
            <img
              src="assets/branding/facebook.svg"
              width="18px"
              height="18px"
            />
          </li>
        </ul>
      </LogoWithCopyrights>
      <Links>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <p className="links-header">Legal</p>
            <ul>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <p className="links-header">Company</p>
            <ul>
              <li>About</li>
              <li>Team</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </Links>
    </Wrapper>
  );
};

export default Footer;
