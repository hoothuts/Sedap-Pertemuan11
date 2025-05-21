import { NavLink } from "react-router-dom";
export default function PageHeader({ title, breadcrumbs = [], buttonText = "Add Button", onButtonClick }) {
    return (
        <div id="pageheader-container" className="flex items-center justify-between p-4">
            <div id="pageheader-left" className="flex flex-col">
                <span id="page-title" className="text-3xl font-semibold">
                    {title}
                </span>
                <div id="breadcrumb-links" className="flex items-center font-medium space-x-2 mt-2">
                    {breadcrumbs.map((item, index) => (
                        <span key={index} className="text-gray-500">
                            {item}
                            {index < breadcrumbs.length - 1 && <span className="mx-2">/</span>}
                        </span>
                    ))}
                </div>
            </div>
            <div id="action-buttons" className="flex space-x-4">
                <NavLink
                    to="/add-customer"
                    className="bg-hijau text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition"
                >
                    + Add Customer
                </NavLink>
                <NavLink
                    to="/add-order"
                    className="bg-biru text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
                >
                    + Add Order
                </NavLink>
            </div>
        </div>
    );
}
