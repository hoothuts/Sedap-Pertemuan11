import { MdDashboard, MdShoppingCart, MdPeople, MdFastfood } from "react-icons/md";
import { NavLink } from "react-router-dom";

const menus = [
  {
    id: "menu-1",
    label: "Dashboard",
    icon: <MdDashboard />,
    path: "/dashboard",
  },
  { id: "menu-2", label: "Orders", icon: <MdShoppingCart />, path: "/orders" },
  { id: "menu-3", label: "Customers", icon: <MdPeople />, path: "/customers" },
  {
    id: "menu-4",
    label: "Error 400",
    icon: <MdDashboard />,
    path: "/error/400",
  },
  {
    id: "menu-5",
    label: "Error 401",
    icon: <MdDashboard />,
    path: "/error/401",
  },
  {
    id: "menu-6",
    label: "Error 403",
    icon: <MdDashboard />,
    path: "/error/403",
  },
  {
    id: "menu-6",
    label: "Error 404",
    icon: <MdDashboard />,
    path: "/error/404",
  },
    {
    id: "menu-7",
    label: "Products",
    icon: <MdFastfood />,
    path: "/products",
  },
];

const menuClass = ({ isActive }) =>
  `flex cursor-pointer items-center rounded-xl p-4 space-x-2
     ${
       isActive
         ? "text-hijau bg-green-200 font-extrabold"
         : "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
     }`;

export default function ListMenu() {
  return (
    <ul id="menu-list" className="space-y-3">
      {menus.map((menu) => (
        <li key={menu.id}>
          <NavLink to={menu.path} id={menu.id} className={menuClass}>
            <span className="mr-4 text-xl">{menu.icon}</span>
            {menu.label}
          </NavLink>
        </li>
        
      ))}
    </ul>
  );
}