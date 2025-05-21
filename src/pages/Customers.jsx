import React, { useEffect, useState } from "react";
import customerData from "../data/Customer.json"; // adjust path if needed

export default function Customers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    setCustomers(customerData);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Customers</h1>
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full text-sm text-left border">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-3 border">Customer ID</th>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Phone</th>
              <th className="p-3 border">Loyalty</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((cust, i) => (
              <tr key={i} className="hover:bg-gray-50 border-t">
                <td className="p-3 border">{cust.customerId}</td>
                <td className="p-3 border">{cust.customerName}</td>
                <td className="p-3 border">{cust.email}</td>
                <td className="p-3 border">{cust.phone}</td>
                <td className="p-3 border">{cust.loyalty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
