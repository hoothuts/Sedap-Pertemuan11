import { MdDashboard } from "react-icons/md";
import { FaJediOrder } from "react-icons/fa6";
import { FaBasketShopping } from "react-icons/fa6";
import ListMenu from "./ListMenu";

export default function Sidebar() {
  return (
    <div
      id="sidebar"
      className="flex min-h-screen w-90 flex-col bg-white p-6 shadow-lg"
    >
      {/* Logo */}
      <div id="sidebar-logo" className="flex flex-col mb-4">
        <span
          id="logo-title"
          className="font-poppins-extrabold text-[48px] text-gray-900 leading-none"
        >
          LeDih{" "}
          <b id="logo-dot" className="text-hijau">
            .
          </b>
        </span>
        <span
          id="logo-subtitle"
          className="font-barlow text-[16px] text-gray-400"
        >
          You are my sunshine, my only sunshine
        </span>
      </div>

      {/* Scrollable List Menu */}
      <div
        id="sidebar-menu"
        className="flex-1 overflow-y-auto pr-2 custom-scrollbar mt-4"
      >
        <ListMenu />
      </div>

      {/* Footer */}
      <div id="sidebar-footer" className="mt-6">
        <div
          id="footer-card"
          className="bg-hijau px-4 py-2 rounded-md shadow-lg mb-6 flex items-center"
        >
          <div id="footer-text" className="text-white text-sm">
            <span>Please organize your menus through button below!</span>
            <div
              id="add-menu-button"
              className="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2"
            >
              <span className="text-gray-600 flex items-center">+</span>
              <span>Add Menus</span>
            </div>
          </div>
          <img
            id="footer-avatar"
            src="https://avatar.iran.liara.run/public/28"
            className="w-20 rounded-full ml-4"
          />
        </div>
        <span id="footer-brand" className="font-bold text-gray-400">
          Sedap Restaurant Admin Dashboard
        </span>
        <p id="footer-copyright" className="font-light text-gray-400">
          &copy; 2025 All Right Reserved
        </p>
      </div>
    </div>
  );
}
