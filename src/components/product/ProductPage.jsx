import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../api";
import ProductPagePlaceHolder from "./ProductPagePlaceHolder";
import RelatedProducts from "./RelatedProducts";
import { BASE_URL } from "../../api";

function ProductPage({ setNumCartItems }) {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inCart, setInCart] = useState(false);
  const [cartCode, setCartCode] = useState(localStorage.getItem("cart_code"));

  // Ensure cart_code exists, and set it to state
  useEffect(() => {
    if (!cartCode) {
      const newCartCode = Math.random().toString(36).substr(2, 8).toUpperCase(); // Generate a new cart code
      localStorage.setItem("cart_code", newCartCode);
      setCartCode(newCartCode); // Save to state as well
    }
  }, [cartCode]);

  // Check if product is in the cart when the product or cartCode changes
  useEffect(() => {
    if (product?.id && cartCode) {
      api
        .get("product_in_cart/", {
          params: {
            cart_code: cartCode,
            product_id: product.id,
          },
        })
        .then((res) => {
          setInCart(res.data.product_in_cart);
        })
        .catch((err) => {
          console.error("Error checking cart:", err.message);
        });
    }
  }, [cartCode, product?.id]);

  // Add item to cart
  const add_item = () => {
    if (!product) {
      console.error("Product not loaded yet.");
      return;
    }

    const newItem = { cart_code: cartCode, product_id: product.id };

    api
      .post("add_item/", newItem)
      .then((res) => {
        console.log("Item added to cart:", res.data);
        setInCart(true);
        setNumCartItems((curr) => curr + 1);
        toast.success("Product added to Cart!");
      })
      .catch((err) => {
        console.error("Error adding item:", err.message);
      });
  };

  // Fetch product details and similar products
  useEffect(() => {
    setLoading(true);
    api
      .get(`product_detail/${slug}`)
      .then((res) => {
        setProduct(res.data);
        setSimilarProducts(res.data.similar_products || []);
      })
      .catch((err) => {
        console.error("Error fetching product:", err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return <ProductPagePlaceHolder />;
  }

  if (!product) {
    return (
      <div className="container text-center my-5">
        <h2>Product Not Found</h2>
        <p>The requested product does not exist.</p>
      </div>
    );
  }

  return (
    <div>
      <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img
                className="card-img-top mb-5 mb-md-0"
                src={`${BASE_URL}${product.image}`}
                alt={product.name}
              />
            </div>
            <div className="col-md-6">
              <div className="small mb-1">SKU: BST-498</div>
              <h1 className="display-5 fw-bolder">{product.name}</h1>
              <div className="fs-5 mb-5">
                <span>{`$${product.price}`}</span>
              </div>
              <p className="lead">
                {product.description || "No description available."}
              </p>
              <div className="d-flex">
                <button
                  className="btn btn-outline-dark flex-shrink-0"
                  type="button"
                  onClick={add_item}
                  disabled={inCart}
                >
                  <i className="bi-cart-fill me-1"></i>
                  {inCart ? "Product Added to Cart" : "Add to Cart"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RelatedProducts products={similarProducts} />
    </div>
  );
}

export default ProductPage;
