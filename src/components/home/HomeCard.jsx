import React from "react";
import { Link,useParams} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { BASE_URL } from "../../api";


function HomeCard({ product }) {
  return (
    <div className="card h-100 mb-4 mx-1">
      <Link to={`/products/${product.slug}`} className="text-decoration-none text-dark">
        <img
          src={`${BASE_URL}${product.image}`}
          className="card-img-top"
          alt={product.name}
          style={{ width: "100%", height: "115px", objectFit: "cover" }}
        />
        <div className="card-body d-flex flex-column justify-content-center">
          <h5 className="card-title text-center">{product.name}</h5>
          <h6 className="card-text text-center">{`$${product.price}`}</h6>
        </div>
      </Link>
    </div>
  );
}

export default HomeCard;

