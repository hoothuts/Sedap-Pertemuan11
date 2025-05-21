import { useEffect, useState } from "react";
import axios from "axios";
import PageHeader from "../../components/PageHeader";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://dummyjson.com/users")
      .then((res) => setUsers(res.data.users))
      .catch((err) => console.error("Error fetching users:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <PageHeader title="Users" breadcrumbs={["Home", "Users"]} />

      {loading ? (
        <div className="mt-6 text-center text-gray-600"><img src="src\assets\sahoor.jpg" alt="" /></div>
      ) : (
        <div className="overflow-x-auto mt-6 rounded-lg shadow">
          <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
            <thead className="bg-gray-100 text-gray-700 uppercase">
              <tr>
                <th className="px-6 py-3">ID</th>
                <th className="px-6 py-3">Nama</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Nomor HP</th>
                <th className="px-6 py-3">Kelamin</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4">{user.id}</td>
                  <td className="px-6 py-4">{`${user.firstName} ${user.lastName}`}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">{user.phone}</td>
                  <td className="px-6 py-4 capitalize">{user.gender}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}