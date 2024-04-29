import React from 'react';

function OrdersPage({ orders, onCancelOrder }) {

  const handleCancelOrder = (orderId) => {
    const isConfirmed = window.confirm('Are you sure you want to cancel this order?');
    if (isConfirmed) {
      onCancelOrder(orderId);
    }
  };

  return (
    <div className="orders-page">
      <h2>Orders</h2>
      <ul>
        {orders.map((order, index) => (
          <li key={index}>
            {/* Product image */}
            <img src={order.product.picture} alt={order.product.name} style={{ width: '100px', height: '100px' }} />
            {/* Product details */}
            <p>Product Name: {order.product.name}</p>
            <p>Price: {order.product.price}</p>
            <p>Quantity: {order.quantity}</p>
            <p>Size: {order.size}</p>
            <p>Shipping Address:</p>
            <p>Country: {order.shippingAddress.country}</p>
            <p>State: {order.shippingAddress.state}</p>
            <p>City: {order.shippingAddress.city}</p>
            <p>Landmark: {order.shippingAddress.landmark}</p>
            <p>Payment Method: {order.paymentMethod}</p>
            {/* Cancel button */}
            <button onClick={() => handleCancelOrder(order.id)}>Cancel</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrdersPage;
