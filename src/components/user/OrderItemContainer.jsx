import OrderHistoryItem from "./OrderHistoryItem";

function OrderItemContainer({ orderItems }) {
  return (
    <div className="row" style={{ height: "300px", overflow: "auto" }}>
      <div className="col-md-12">
        <div className="card">
          <div className="card-header text-center bg-primary text-white">
            <h5>Order History</h5>
          </div>
          {orderItems.map((orderItem) => (
            <OrderHistoryItem key={orderItem.id} orderItem={orderItem} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OrderItemContainer;
