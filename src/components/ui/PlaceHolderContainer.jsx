import React from "react";
import PlaceHolder from "./PlaceHolder";

function PlaceHolderContainer() {
  const placeNumbers = [...Array(12).keys()];

  return (
    <div>
      <section>
        <h4 className="text-center">Our Products</h4>
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row justify-content-center">
            {placeNumbers.map((num) => (
              <PlaceHolder key={num} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default PlaceHolderContainer;
