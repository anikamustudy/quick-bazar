// SidebarMenu.tsx
import React from "react";
import { FaTimes } from "react-icons/fa";

interface SidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 z-50`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <span className="font-semibold">Menu</span>
        <FaTimes className="cursor-pointer" onClick={onClose} />
      </div>
      <div className="p-4 space-y-4">
        {/* Sidebar content (categories) */}
        <div>Services</div>
        <div>Jobs</div>
        <div>Cars</div>
        <div>Bikes</div>
        {/* Add more categories as needed */}
      </div>
    </div>
  );
};

export default SidebarMenu;
