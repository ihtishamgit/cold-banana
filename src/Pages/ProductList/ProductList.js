import React from "react";
import useFetch from "../../Hooks/useFetch";
import { ShimmerFeaturedGallery } from "react-shimmer-effects";
const apiUrl = process.env.REACT_APP_API_URL;

const ProductList = () => {
  const { data, loading, error } = useFetch(apiUrl);
  const ProductList = () => {
    if (error) {
      return <h1 className="error">Some error occurred. No Data!</h1>;
    } else {
      return loading ? (
        <ShimmerFeaturedGallery row={2} col={2} card frameHeight={600} />
      ) : (
        <>
          <div class="container">
            <div class="box-container">
              {data &&
                data.map((item) =>
                  item.map(({ image, product_name, price }) => (
                    <div class="box">
                      <img src={image} alt={product_name} />
                      <h3 className="font-weight-700">{product_name}</h3>
                      <p className="font-weight-700">£{price}</p>
                    </div>
                  ))
                )}
            </div>
          </div>
          <div className="load-more-btn">Load More</div>
        </>
      );
    }
  };

  return (
    <section className="product-list-container">
      <main className="card-container">{ProductList()}</main>
    </section>
  );
};

export default ProductList;
