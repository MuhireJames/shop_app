import React from "react";
import HomeCard from "./HomeCard";

function CardContainer({ products }) {
  return (
    <section className="py-5" id="shop">
      <div className="container px-4 px-lg-5">
        <h4 className="text-center mb-4">Our Products</h4>
        <div className="row g-4 justify-content-center">
          {products.map((product) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={product.id}>
              <HomeCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardContainer;

