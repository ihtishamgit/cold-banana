import React, { useEffect, useState } from "react";
import { ShimmerFeaturedGallery } from "react-shimmer-effects";

const ProductList = () => {
  useEffect(() => {
    getData();
  }, []);
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  async function getData() {
    const url =
      "https://my-json-server.typicode.com/TomSearle/cb-devtest-api/products";
    try {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      setData(json);
      console.log(json);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  }
  console.log(data, "data");

  return (
    <section className="product-list-container">
      <main className="card-container">
        {loading ? (
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
        )}
      </main>
    </section>
  );
};

export default ProductList;
