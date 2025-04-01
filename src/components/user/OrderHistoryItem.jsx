import React from "react";
import { BASE_URL } from "../../api";
import { FormatDate } from "../../FormatDate";

function OrderHistoryItem({ orderItem }) {
  return (
    <div className="card shadow-sm mb-3">
      <div className="card-body">
        <div className="row">
          {/* Column 1: Order Item */}
          <div className="col-md-3">
            <img
              src={`${BASE_URL}${orderItem.product.image}`}
              alt={orderItem.product.name}
              className="img-fluid"
              style={{ borderRadius: "5px" }}
            />
          </div>
          <div className="col-md-3 mb-2">
            <h6>{orderItem.product.name}</h6>
            <p>{`Order Date:${FormatDate(orderItem.order_date)}`}</p>
            <p>{`Order ID:${orderItem.order_id}`}</p>
          </div>
          <div className="col-md-3">
            <h6 classname="text-muted">{`Quantity:${orderItem.quantity}`}</h6>
          </div>
          <div className="col-md-3">
            <h6 className="text-muted">{`Price:$${orderItem.product.price}`}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderHistoryItem;
