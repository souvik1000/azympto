import React from "react";
import styled from "styled-components";

import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import OpacityOutlinedIcon from "@mui/icons-material/OpacityOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

const Wrapper = styled.div`
  margin-bottom: 144px;

  .category-header {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 56px;
    color: #1a202c;
  }

  .categories {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 72px 0px;
  }

  .category-section {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    background: #f6f7fb;
    border-radius: 24px;
    height: 128px;
    width: 128px;
  }
`;

const iconMapper = {
  LocalMallOutlinedIcon: <LocalMallOutlinedIcon style={{ color: "#00cc96" }} />,
  TrendingUpOutlinedIcon: (
    <TrendingUpOutlinedIcon style={{ color: "#00cc96" }} />
  ),
  LayersOutlinedIcon: <LayersOutlinedIcon style={{ color: "#00cc96" }} />,
  DarkModeOutlinedIcon: <DarkModeOutlinedIcon style={{ color: "#00cc96" }} />,
  WbSunnyOutlinedIcon: <WbSunnyOutlinedIcon style={{ color: "#00cc96" }} />,
  ShieldOutlinedIcon: <ShieldOutlinedIcon style={{ color: "#00cc96" }} />,
  OpacityOutlinedIcon: <OpacityOutlinedIcon style={{ color: "#00cc96" }} />,
  RemoveRedEyeOutlinedIcon: (
    <RemoveRedEyeOutlinedIcon style={{ color: "#00cc96" }} />
  ),
};

const Category = () => {
  const [catagories, setCatagories] = React.useState([]);

  React.useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((res) => setCatagories(res));
  }, []);

  return (
    <Wrapper>
      <div className="category-header">Browse by Category</div>
      <div className="categories">
        {catagories.map((item, index) => {
          return (
            <div key={index} className="category-section">
              {iconMapper[item.icon]}
              <div>{item.title}</div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Category;
