import HomeCard from "../home/HomeCard"
function RelatedProducts({ products }) {
  return (
    <section className="py-3 bg-light">
      <div className="container px-4 px-lg-5 mt-3">
        <h2 className="fw-bolder text-center mb-4">Related Products</h2>
        <div className="row g-4 justify-content-center">
          {products.map((product) => (
            <div className="col-6 col-md-4 col-lg-3" key={product.id}>
              <HomeCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RelatedProducts;


