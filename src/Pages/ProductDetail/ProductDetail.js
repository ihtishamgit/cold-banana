import React from "react";
import vectorDetailImage from "../../Assets/ProductDetail/vector-product-detail.png";
import pngWing from "../../Assets/ProductDetail/pngwing.png";

const ProductDetail = () => {
  return (
    <main className="image-with-text-container">
      <article className="product-detail-container">
        <div>
          <h1 className="font-weight-700">
            Lorem ipsum dolor sit <br />
            amet.
          </h1>
          <p className="product-detail">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
          <button className="btn-small cursor-pointer">Read More </button>
        </div>
        <div className="flower-pot-container">
          <img
            className="vector-detail-image"
            src={vectorDetailImage}
            alt="vectorDetailImage"
          />
          <img className="png-wing-plant" src={pngWing} alt="pngWing" />
        </div>
      </article>
    </main>
  );
};

export default ProductDetail;
