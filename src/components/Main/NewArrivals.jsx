import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 176px;

  .newArrival-header {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 56px;
    color: #1a202c;
  }

  .products {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 72px 0px;
    flex-wrap: wrap;
    row-gap: 72px;
  }

  .view-all {
    display: flex;
    justify-content: center;

    button {
      color: #fff;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 700;
      letter-spacing: 0.1rem;
      border: 0px;
      align-items: center;
      padding: 16px 40px;

      background: #00cc96;
      border-radius: 32px;
    }
  }
`;

const Product = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  .product-discount {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 96px;
    height: 40px;
    right: -20px;
    top: 24px;
    background: #ff0000;

    border: 2px solid #ffffff;
    border-radius: 24px;

    span {
      align-items: center;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 24px;
      color: #f7fafc;
    }
  }

  .product-image {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 276px;
    width: 276px;
    border-radius: 48px;
    background: #f6f7fb;
  }

  .product-shadow {
    margin: -6px;
    transform: translate(28%);
  }

  .product-title {
    font-family: Montserrat;
    font-size: 22px;
    font-weight: 600;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: left;
    color: #1a202c;
  }
`;

const BadgeAndPrice = styled.div`
  display: flex;
  align-items: center;

  .product-type {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    background-color: ${({ bgcolor }) =>
      bgcolor ? bgcolor : "rgba(41, 117, 255, 0.1)"};
    color: ${({ color }) => (color ? color : "#2975ff")};
    padding: 8px 16px;
    border-radius: 24px;
    margin-right: 16px;
  }

  .product-price--strike {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: rgba(26, 32, 44, 0.24);
    margin: 0px 8px;
    text-decoration-line: line-through;
  }

  .product-price--actual {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 32px;
    text-align: center;
    color: #1a202c;
  }
`;

const NewArrivals = () => {
  const [arrivalProducts, setArrivalProducts] = React.useState([]);

  React.useEffect(() => {
    fetch("new-arrivals.json")
      .then((res) => res.json())
      .then((res) => setArrivalProducts(res));
  }, []);

  const calculateDiscount = (mrp, offerPrice) =>
    Math.floor(((mrp - offerPrice) * 100) / mrp);

  const getBGColorFromColor = (color) => {
    let colors = color.split(", ");
    colors.splice(-1, 1);
    colors.push("0.1)");

    return colors.join(", ");
  };

  return (
    <Wrapper>
      <div className="newArrival-header">New Arrivals</div>
      <div className="products">
        {arrivalProducts.map((product, index) => {
          const { icon, title, type, mrp, offerPrice, color } = product;

          if (index < 8) {
            return (
              <Product key={index}>
                <div style={{ position: "relative" }}>
                  {offerPrice && (
                    <div className="product-discount">
                      <span>{calculateDiscount(mrp, offerPrice)}% OFF</span>
                    </div>
                  )}
                  <div className="product-image">
                    <img src={`assets/products/${icon}`} />
                    <img
                      className="product-shadow"
                      src="assets/products/Shadow.png"
                    />
                  </div>
                </div>
                <div className="product-title">{title}</div>
                <BadgeAndPrice
                  color={color}
                  bgcolor={getBGColorFromColor(color)}
                >
                  <div className="product-type">{type.toUpperCase()}</div>
                  {offerPrice && (
                    <p className="product-price--strike">${mrp}</p>
                  )}
                  <p className="product-price--actual">
                    ${offerPrice ? offerPrice : mrp}
                  </p>
                </BadgeAndPrice>
              </Product>
            );
          } else {
            return <></>;
          }
        })}
      </div>
      <div className="view-all">
        <button type="button">View All</button>
      </div>
    </Wrapper>
  );
};

export default NewArrivals;
