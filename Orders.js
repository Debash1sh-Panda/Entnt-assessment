import React, { useState } from 'react';
import ordersData from '../data/ordersData';

const Orders = () => {
  const [orders, setOrders] = useState(ordersData);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [newOrderStatus, setNewOrderStatus] = useState('');

  const handleViewDetails = (orderId) => {
    setSelectedOrderId(orderId);
  };

  const handleUpdateStatus = () => {
    if (selectedOrderId !== null && newOrderStatus.trim() !== '') {
      const updatedOrders = orders.map((order) =>
        order.id === selectedOrderId ? { ...order, status: newOrderStatus } : order
      );
      setOrders(updatedOrders);
      setSelectedOrderId(null);
      setNewOrderStatus('');
    }
  };

  const handleDeleteOrder = (orderId) => {
    const updatedOrders = orders.filter((order) => order.id !== orderId);
    setOrders(updatedOrders);
  };

  return (
    <div>
      <h2>Orders Management</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Order Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.date}</td>
              <td>{order.status}</td>
              <td>
                <button onClick={() => handleViewDetails(order.id)}>View Details</button>
                <button onClick={() => handleDeleteOrder(order.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedOrderId !== null && (
        <div>
          <h3>Order Details</h3>
          {/* Display order details based on selectedOrderId */}
        </div>
      )}

      <div>
        <h3>Update Order Status</h3>
        <label>New Status:</label>
        <input
          type="text"
          value={newOrderStatus}
          onChange={(e) => setNewOrderStatus(e.target.value)}
        />
        <button onClick={handleUpdateStatus}>Update Status</button>
      </div>
    </div>
  );
};

export default Orders;
