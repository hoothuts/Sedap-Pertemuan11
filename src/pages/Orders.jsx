import React, { useEffect, useState } from "react";
import orderData from "../data/Order.json"; // adjust path if needed

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders(orderData);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Orders</h1>
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full text-sm text-left border">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-3 border">Order ID</th>
              <th className="p-3 border">Customer Name</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Total Price</th>
              <th className="p-3 border">Order Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, i) => (
              <tr key={i} className="hover:bg-gray-50 border-t">
                <td className="p-3 border">{order.orderId}</td>
                <td className="p-3 border">{order.customerName}</td>
                <td className="p-3 border">{order.status}</td>
                <td className="p-3 border">${order.totalPrice.toFixed(2)}</td>
                <td className="p-3 border">{order.orderDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
