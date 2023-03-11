import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Popup from "./atoms/Popup";

const HeaderWrapper = styled.div`
  margin: 48px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    list-style: none;
  }

  li {
    float: left;
    cursor: pointer;
    padding-left: 34px;
  }
`;

const Logo = styled.img`
  width: 155px;
  height: 43px;
`;

const HeaderContent = styled.div`
  background: #f6f7fb;
  border-radius: 64px;
  height: 600px;
  width: 100%;
  left: 0px;
  top: 0px;
  margin-bottom: 144px;

  p {
    position: absolute;
    left: 0%;
    right: 0%;

    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 56px;
    color: #1a202c;

    height: 112px;
    width: 496px;
    left: 96px;
    top: 220px;
    border-radius: nullpx;
  }

  button {
    color: #fff;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0.1rem;
    border: 0px;
    align-items: center;
    padding: 16px 40px;
    gap: 10px;

    position: absolute;
    width: 187px;
    height: 64px;
    left: 96px;
    top: 360px;
    background: #00cc96;
    border-radius: 32px;
  }

  img {
    position: absolute;
    width: 768px;
    height: 576px;
    right: 24px;
    bottom: 0px;
  }
`;

const setModalView = (prev, open, title, description) => {
  return {
    ...prev,
    open,
    title: title || prev.title,
    description: description || prev.description,
  };
};

const Header = () => {
  const [modal, setModal] = React.useState({
    open: false,
    title: "Hygge- Interview",
    description: "This is a sample modal desc.",
  });

  return (
    <>
      <div>
        <HeaderWrapper>
          <Logo src="assets/logo.svg" />
          <ul>
            <li>
              <SearchIcon
                onClick={() =>
                  setModal((prev) =>
                    setModalView(
                      prev,
                      !prev.open,
                      "Search Product",
                      "Search the specific product."
                    )
                  )
                }
              />
            </li>
            <li>
              <ShoppingCartOutlinedIcon
                onClick={() =>
                  setModal((prev) =>
                    setModalView(
                      prev,
                      !prev.open,
                      "Your Cart",
                      "Look once into your cart."
                    )
                  )
                }
              />
            </li>
            <li>
              <PersonOutlinedIcon
                onClick={() =>
                  setModal((prev) =>
                    setModalView(
                      prev,
                      !prev.open,
                      "Account",
                      "Hey, Update you profile over here."
                    )
                  )
                }
              />
            </li>
          </ul>
        </HeaderWrapper>
        <div style={{ position: "relative" }}>
          <HeaderContent>
            <div style={{ position: "relative" }}>
              <p>We Offer the Best Products for your Skin</p>
              <button
                type="button"
                onClick={() =>
                  setModal((prev) =>
                    setModalView(
                      prev,
                      !prev.open,
                      "Shopping Page",
                      "Section is to continue your shoping"
                    )
                  )
                }
              >
                Shop Now
              </button>
            </div>
            <img src="assets/image.png" width="768px" height="576px" />
          </HeaderContent>
        </div>
      </div>
      {modal.open && (
        <Popup
          title={modal.title}
          description={modal.description}
          onClose={() => setModal((prev) => setModalView(prev, !prev.open))}
        />
      )}
    </>
  );
};

export default Header;
